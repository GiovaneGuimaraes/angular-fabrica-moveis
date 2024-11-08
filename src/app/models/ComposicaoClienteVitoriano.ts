import { Cadeira } from './Cadeira';
import { CadeiraVitoriano } from './CadeiraVitoriano';
import { Sofa } from './Sofa';
import { SofaVitoriano } from './SofaVitoriano';
import { FabricaMoveis } from './FabricaMoveis';
import { MesaCentro } from './MesaCentro';
import { MesaCentroVitoriano } from './MesaCentroVitoriano';

export class ComposicaoClienteVitoriano implements FabricaMoveis {
  CriarMesaCentroVitoriano(): MesaCentro {
    return new MesaCentroVitoriano();
  }
  CriarCadeiraVitoriana(): Cadeira {
    return new CadeiraVitoriano();
  }
  CriarSofaVitoriano(): Sofa {
    return new SofaVitoriano();
  }

  CriarCadeiraModerno(): Cadeira {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarCadeiraArteDeco(): Cadeira {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarSofaModerno(): Sofa {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarSofaArteDeco(): Sofa {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarMesaCentroModerno(): MesaCentro {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
  CriarMesaCentroArteDeco(): MesaCentro {
    throw new Error('Falha ao comprar este tipo de produto com este cliente!');
  }
}
