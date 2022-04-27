import React, { useState } from 'react';
import AccordionLayout from '../AccordionLayout';
import Lottie from 'react-lottie';
import Astronaut from '../../public/lotties/astronaut-1.json';

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(1);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Astronaut,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

  return (
      <div className='flex flex-col justify-center items-center mt-20'>
            <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
            />
          <h2 className='text-4xl font-bold mb-6'>Perguntas Frequentes</h2>
          <AccordionLayout 
            title="O curso é ao vivo com professor?"
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            Sim. Todas as aulas de russo são ao vivo com o professor, na mesma sala de aula do Google Meet. Sendo possível interagir falando, perguntando e respondendo os exercícios com o professor.
          </AccordionLayout>

          <AccordionLayout 
            title="O que significa Grupos de Russo?"
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            Cada Grupo de Russo é uma turma de 5 alunos do curso. Os grupos são formados pelo influenciador parceiro ou pela escola, e além das aulas de russo, conta com as lives exclusivas para os alunos sobre a Rússia.
          </AccordionLayout>
          
          <AccordionLayout 
            title="Quanto Tempo o Curso Dura?"
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            Cada módulo de russo dura 6 meses, sendo eles os módulo básico, intermediário e avançado.
          </AccordionLayout>
          
          <AccordionLayout 
            title="Quanto custa o curso?"
            index={4}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            O módulo básico de russo - que estão disponíveis neste momento - tem o investimento total de R$720 e é feito ao vivo em 6 meses de aula, e pode ser feito em 12x de R$60 (apenas um cafezinho por dia, para falar russo!).
          </AccordionLayout>
          
          <AccordionLayout 
            title="Qual é a grade curricular do curso?"
            index={5}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            Você pode ler a grade curricular clicando <a href="#">Aqui</a>. Ou assistir ao vídeo explicativo de todo o processo: <a href="#">Vídeo Explicativo</a>.
          </AccordionLayout>
      </div>
  );
};