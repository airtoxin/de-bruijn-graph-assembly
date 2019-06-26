export class ReadsSampler {
  constructor(private sequence: string) {}

  createReads(overlap: number = 5): string[] {
    const reads: string[] = [];

    let unreadSequence = this.sequence;
    while (1) {
      const size = overlap + Math.floor(Math.random() * 15);
      const read = unreadSequence.slice(0, size);
      reads.push(read);

      const overlapSequence = read.slice(read.length - overlap, read.length);
      unreadSequence = overlapSequence + unreadSequence.slice(size);

      if (unreadSequence.length < overlap * 2) {
        reads.push(unreadSequence);
        break;
      }
    }
    return reads;
  }
}
