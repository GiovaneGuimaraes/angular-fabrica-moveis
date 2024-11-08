import { Cadeira } from './Cadeira';
import { Sofa } from './Sofa';
import { FabricaMoveis } from './FabricaMoveis';
import { CadeiraArteDeco } from './CadeiraArteDeco';
import { SofaArteDeco } from './SofaArteDeco';
import { MesaCentro } from './MesaCentro';
import { MesaCentroArteDeco } from './MesaCentroArteDeco';

export class ComposicaoClienteArteDeco implements FabricaMoveis {
  CriarCadeiraArteDeco(): Cadeira {
    return new CadeiraArteDeco();
  }
  CriarSofaArteDeco(): Sofa {
    return new SofaArteDeco();
  }
  CriarMesaCentroArteDeco(): MesaCentro {
    return new MesaCentroArteDeco();
  }

  CriarCadeiraModerno(): Cadeira {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarCadeiraVitoriana(): Cadeira {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarSofaModerno(): Sofa {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarSofaVitoriano(): Sofa {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarMesaCentroModerno(): MesaCentro {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarMesaCentroVitoriano(): MesaCentro {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
}
