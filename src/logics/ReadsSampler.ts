import {shuffle, splitByIndex, splitByIndexLeft} from "./utils";

const defaultRandomizer: typeof Math.random = () => Math.random() * 15;

export class ReadsSampler {
  constructor(private sequence: string, private random: typeof Math.random = defaultRandomizer) {}

  createReads(overlap: number): string[] {
    const reads: string[] = [];

    let unreadSequence = this.sequence;
    while (1) {
      const readSize = overlap * 2 + Math.floor(this.random());
      if (unreadSequence.length <= readSize) {
        reads.push(unreadSequence);
        break;
      }
      const [read, remains] = splitByIndex(unreadSequence, readSize);
      reads.push(read);

      const [_, overlappingSequence] = splitByIndexLeft(read, overlap);
      unreadSequence = overlappingSequence + remains;
    }
    return shuffle(reads);
  }
}
