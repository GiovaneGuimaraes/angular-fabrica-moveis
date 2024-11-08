export abstract class Sofa {
  static contadorDeIds = 0;
  id: number;
  cor: string;
  material: string;
  tamanho: string;
  estilo: string;
  statusComprado: boolean;

  constructor(cor: string, material: string, tamanho: string, estilo: string) {
    this.id = ++Sofa.contadorDeIds;
    this.cor = cor;
    this.material = material;
    this.tamanho = tamanho;
    this.estilo = estilo;
    this.statusComprado = false;
  }

  alterarTamanho(newTamanho: string) {
    console.log(`tamanho alterado para: ${newTamanho}`);
    this.tamanho = newTamanho;
  }

  alterarCor(newColor: string) {
    console.log(`cor alterado para: ${newColor}`);
    this.cor = newColor;
  }

  alterarMaterial(newMaterial: string) {
    console.log(`material alterado para: ${newMaterial}`);
    this.material = newMaterial;
  }
}
