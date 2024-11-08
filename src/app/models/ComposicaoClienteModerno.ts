import { Cadeira } from './Cadeira';
import { CadeiraModerna } from './CadeiraModerna';
import { Sofa } from './Sofa';
import { SofaModerno } from './SofaModerno';
import { FabricaMoveis } from './FabricaMoveis';
import { MesaCentro } from './MesaCentro';
import { MesaCentroModerno } from './MesaCentroModerno';

export class ComposicaoClienteModerno implements FabricaMoveis {
  CriarCadeiraModerno(): Cadeira {
    return new CadeiraModerna();
  }
  CriarSofaModerno(): Sofa {
    return new SofaModerno();
  }
  CriarMesaCentroModerno(): MesaCentro {
    return new MesaCentroModerno();
  }

  CriarCadeiraArteDeco(): Cadeira {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarCadeiraVitoriana(): Cadeira {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarSofaArteDeco(): Sofa {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarSofaVitoriano(): Sofa {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarMesaCentroArteDeco(): MesaCentro {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarMesaCentroVitoriano(): MesaCentro {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
}
