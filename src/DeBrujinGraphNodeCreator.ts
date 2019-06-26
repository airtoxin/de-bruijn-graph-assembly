export type GraphNode = [string, string];

export class DeBrujinGraphNodeCreator {
  constructor (private sequences: string[]) {}

  createNodes(nodeSize: number): GraphNode[] {
    const nodesPerSeq = this.sequences.map(sequence => {
      const heads = [];
      const tails = [];

      let seq = sequence;
      while (1) {
        const head = seq.slice(0, nodeSize);
        const remains = seq.slice(nodeSize, seq.length - nodeSize);
        const tail = seq.slice(seq.length - nodeSize);

        heads.push(head);
        tails.unshift(tail);
        if (remains.length < nodeSize * 2) {
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
    for (const nodes of nodesPerSeq) {
      for (let i = 0; i < nodes.length - 1; i++) {
        graphNodes.push([nodes[i], nodes[i + 1]]);
      }
    }

    return graphNodes;
  }
}
