import {splitByIndex, splitByIndexLeft} from "./utils";

export type GraphNode = [string, string];

export class DeBrujinGraphNodeCreator {
  constructor (private sequences: string[]) {}

  createNodes(nodeSize: number): GraphNode[] {
    const nodesPerSeq = this.sequences.map(sequence => {
      const heads = [];
      const tails = [];

      let seq = sequence;
      // "oq984q37 4hq"
      while (1) {
        if (seq.length < nodeSize) {
          if (seq) heads.push(seq);
          break;
        }

        const [head, headRemains] = splitByIndex(seq, nodeSize);
        heads.push(head);

        if (headRemains.length < nodeSize) {
          heads.push(headRemains);
          break;
        }
        const [remains, tail] = splitByIndexLeft(headRemains, nodeSize);

        tails.push(tail);

        seq = remains;
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
