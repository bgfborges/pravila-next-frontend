import { BsGlobe2, BsLaptop, BsYoutube } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';

const features = [
  {
    name: 'Professores Nativos: mais do que a língua',
    description:
      'Com professores direto da Rússia, você aprende não só a língua, mas a cultura, o pensamento, o mindset do povo russo..',
    icon: BsGlobe2,
  },
  {
    name: 'Edu Tech',
    description:
      'Aprender online não é só abrir o computador. Contamos com um conjunto de ferramentas que permitem o aprendizado imersivo.',
    icon: BsLaptop,
  },
  {
    name: 'Grupos de Estudos Focados',
    description:
      'Nossos grupos de estudos tem como objetivo colocar na sala pessoas com mesmos objetivos, ideias e desejos. Foco no que interessa.',
    icon: HiUserGroup,
  },
  {
    name: 'Interatividade com Quem Sabe',
    description:
      'Temos como parceiros, os maiores canais com foco na Rússia do Brasil. Com diversas visões, parcitipando de conteúdo dentro da plataforma.',
    icon: BsYoutube,
  },
]

export default function Features() {
  return (
    <div className="py-12 my-52">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pravila Idiomas</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Porque Estudar com a Pravila?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Entre professores nativos, currículo testado e aprovado, ainda temos mais vantagens no ensino do russo.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-darktext">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
