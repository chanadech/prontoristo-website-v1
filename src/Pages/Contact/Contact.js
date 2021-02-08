import React from 'react';
import { InfoSection } from '../../components';
<<<<<<< HEAD
import { homeObjOne} from './Data';
=======
import { homeObjOne,homeObjTwo} from './Data';
>>>>>>> eb37ac339f8390b635b1032672b9b5db4e109241

function Contact() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />

    </>
  );
}

export default Contact;
