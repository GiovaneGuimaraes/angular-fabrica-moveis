import { Sofa } from './Sofa';
import { Cadeira } from './Cadeira';
import { MesaCentro } from './MesaCentro';

export interface FabricaMoveis {
  CriarCadeiraModerno(): Cadeira;
  CriarCadeiraArteDeco(): Cadeira;
  CriarCadeiraVitoriana(): Cadeira;
  CriarSofaModerno(): Sofa;
  CriarSofaArteDeco(): Sofa;
  CriarSofaVitoriano(): Sofa;
  CriarMesaCentroModerno(): MesaCentro;
  CriarMesaCentroArteDeco(): MesaCentro;
  CriarMesaCentroVitoriano(): MesaCentro;
}
