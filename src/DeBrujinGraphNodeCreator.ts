export type GraphNode = [string, string];

export class DeBrujinGraphNodeCreator {
  constructor (private sequences: string[]) {}

  createNodes(size: number): GraphNode[] {
    const nodes = this.sequences.flatMap(sequence => {
      const heads = [];
      const tails = [];

      let seq = sequence;
      while (1) {
        const head = seq.slice(0, size);
        const remains = seq.slice(size, seq.length - size);
        const tail = seq.slice(seq.length - size);

        heads.push(head);
        tails.unshift(tail);
        if (remains.length < size * 2) {
          if (remains) heads.push(remains);
          break;
        } else {
          seq = remains;
        }
      }

      return [
        ...heads,
        ...tails
      ];
    });

    const graphNodes: GraphNode[] = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      graphNodes.push([nodes[i], nodes[i + 1]]);
    }

    return graphNodes;
  }
}
