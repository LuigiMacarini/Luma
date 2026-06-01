import type { ComponentType, SVGProps } from "react";
import { Moon, Flower, Brain, Activity, Heart, Lock } from "../components/ui/icons";

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: { term?: string; text: string }[] }
  | { type: "callout"; tone: "tip" | "alert"; title: string; text: string };

export interface LearnSection {
  heading?: string;
  blocks: Block[];
}

export interface LearnPage {
  slug: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  eyebrow: string;
  title: string;
  /** Trecho do titulo exibido em italico (deve ser substring de title). */
  accent: string;
  intro: string;
  heroLabel: string;
  readTime: string;
  sections: LearnSection[];
}

export const learnPages: LearnPage[] = [
  {
    slug: "ciclo-menstrual",
    icon: Moon,
    eyebrow: "Para voce",
    title: "Entenda o seu ciclo menstrual",
    accent: "ciclo menstrual",
    intro:
      "O ciclo menstrual e uma funcao natural do corpo feminino, regulada por hormonios como o estrogenio e a progesterona. Alem de ser essencial para a fertilidade, ele reflete o equilibrio hormonal, influencia diversos aspectos da saude fisica e emocional e afeta diretamente o bem-estar diario da mulher.",
    heroLabel: "Fases do ciclo",
    readTime: "6 min de leitura",
    sections: [
      {
        heading: "O que e o ciclo menstrual?",
        blocks: [
          {
            type: "paragraph",
            text: "O ciclo menstrual dura em media 28 dias e corresponde ao periodo em que ocorrem alteracoes fisiologicas no utero para a liberacao do ovulo, que pode ser fecundado mediante relacao sexual ou por tecnicas reprodutivas. Os ciclos menstruais costumam variar entre 24 e 38 dias.",
          },
        ],
      },
      {
        heading: "As 4 fases do ciclo",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                term: "Menstruacao",
                text: "Durante esse periodo, e comum experimentar sintomas como colicas, fadiga e mudancas de humor. E importante manter uma boa higiene menstrual e usar absorventes adequados para evitar infeccoes.",
              },
              {
                term: "Fase folicular",
                text: "Comeca no primeiro dia da menstruacao e dura ate a ovulacao. O corpo se prepara para a ovulacao com o desenvolvimento dos foliculos ovarianos. Mudancas hormonais, especialmente o aumento do estrogenio, promovem o espessamento do revestimento uterino e podem aumentar a energia e a sensacao de bem-estar.",
              },
              {
                term: "Ovulacao",
                text: "Ocorre no meio do ciclo menstrual, geralmente por volta do 14o dia. E quando um dos foliculos ovarianos libera um ovulo maduro.",
              },
              {
                term: "Fase lutea",
                text: "Segue a ovulacao e dura cerca de 14 dias, periodo em que o corpo se prepara para uma possivel gestacao.",
              },
            ],
          },
        ],
      },
      {
        heading: "Ciclos irregulares: quando se preocupar?",
        blocks: [
          {
            type: "callout",
            tone: "alert",
            title: "Fique atenta aos sinais",
            text: "Ciclos muito irregulares, com menos de 21 ou mais de 35 dias, podem apontar problemas de saude como hipertireoidismo ou sindrome dos ovarios policisticos (SOP). Colicas muito fortes, fluxos intensos ou a falta deles (amenorreia) podem indicar problemas hormonais. Consultar um ginecologista regularmente e indispensavel para diagnosticar e tratar possiveis problemas.",
          },
        ],
      },
      {
        blocks: [
          {
            type: "callout",
            tone: "tip",
            title: "Dica pratica",
            text: "Anote todas as informacoes sobre seu ciclo menstrual: quando comecou, quando terminou, como estava a cor e o cheiro da menstruacao e se teve colicas. Crie um diario da sua saude menstrual.",
          },
        ],
      },
    ],
  },
  {
    slug: "fertilidade",
    icon: Flower,
    eyebrow: "Para voce",
    title: "Fertilidade feminina: o que voce precisa saber",
    accent: "Fertilidade feminina",
    intro:
      "A fertilidade feminina refere-se a capacidade do corpo da mulher de conceber e gerar filhos. Este conceito e crucial nao apenas para a saude reprodutiva, mas tambem para o bem-estar emocional e social.",
    heroLabel: "Saude reprodutiva",
    readTime: "5 min de leitura",
    sections: [
      {
        heading: "Fatores que influenciam a fertilidade",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Idade",
                text: "A fertilidade das mulheres comeca a diminuir significativamente apos os 30 anos, especialmente apos os 35, devido a reducao na qualidade e quantidade dos ovulos.",
              },
              {
                term: "Saude hormonal",
                text: "Condicoes como a sindrome do ovario policistico (SOP) e disturbios da tireoide podem afetar a ovulacao e, consequentemente, a fertilidade.",
              },
              {
                term: "Condicoes medicas",
                text: "Doencas como endometriose, infeccoes pelvicas e problemas uterinos podem dificultar a concepcao e a gravidez.",
              },
              {
                term: "Estilo de vida",
                text: "Substancias como tabaco, alcool e drogas ilicitas sao reconhecidas como grandes inimigas da saude, e a fertilidade feminina nao e excecao.",
              },
            ],
          },
        ],
      },
      {
        heading: "Como cuidar da sua fertilidade",
        blocks: [
          {
            type: "paragraph",
            text: "Para aumentar a fertilidade e as chances de engravidar, e preciso que a mulher tenha habitos de vida saudaveis, como uma alimentacao adequada e balanceada, pratica de atividades fisicas e o abandono de vicios prejudiciais a saude, como o cigarro e a bebida alcoolica.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "O sono tambem conta",
            text: "Dormir bem ajuda na fertilidade. O hormonio do sono, a melatonina, tem acao antioxidante e e essencial para o processo reprodutivo.",
          },
        ],
      },
      {
        heading: "Quando buscar ajuda medica?",
        blocks: [
          {
            type: "paragraph",
            text: "Os exames de fertilidade feminina sao fundamentais para compreender as causas da dificuldade em engravidar e para planejar a maternidade de forma mais segura e consciente.",
          },
          {
            type: "callout",
            tone: "alert",
            title: "Nao perca tempo precioso",
            text: "Saber o momento certo de procurar ajuda, especialmente apos 6 a 12 meses de tentativas sem sucesso, e essencial para nao perder tempo precioso.",
          },
        ],
      },
    ],
  },
  {
    slug: "saude-mental",
    icon: Brain,
    eyebrow: "Para voce",
    title: "Saude mental feminina: cuidar da mente e cuidar de si",
    accent: "cuidar de si",
    intro:
      "A saude mental e crucial para o bem-estar individual e coletivo, impactando significativamente as familias, comunidades e a sociedade em geral. Uma boa saude mental permite que as mulheres enfrentem desafios diarios e desfrutem de uma vida equilibrada e satisfatoria.",
    heroLabel: "Bem-estar emocional",
    readTime: "7 min de leitura",
    sections: [
      {
        heading: "Desafios especificos da mulher",
        blocks: [
          {
            type: "paragraph",
            text: "As mulheres, em geral, enfrentam uma pressao constante para serem multitarefas, equilibrando carreiras, familias, amizades e muitas vezes a expectativa de atender a padroes esteticos e comportamentais. Essa sobrecarga pode, aos poucos, afetar a saude mental, gerando sintomas como ansiedade, estresse e ate depressao.",
          },
          {
            type: "paragraph",
            text: "Estudos da OMS indicam maior prevalencia de depressao e ansiedade entre mulheres, influenciada por fatores biologicos e sociais. Puberdade, gravidez, pos-parto e menopausa podem provocar mudancas hormonais que impactam o humor e a estabilidade emocional.",
          },
        ],
      },
      {
        heading: "Estrategias para cuidar da saude mental",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Valide suas emocoes",
                text: "Reconhecer e validar as proprias emocoes e um passo essencial. Praticar a autocompaixao e abandonar padroes irreais de perfeicao ajuda a reduzir a pressao psicologica.",
              },
              {
                term: "Construa uma rede de apoio",
                text: "Amizades, grupos de apoio ou ate redes sociais podem ser um grande alicerce emocional. A troca de experiencias fortalece a saude mental.",
              },
              {
                term: "Priorize o descanso",
                text: "O descanso e fundamental para o corpo e para a mente. Uma boa noite de sono, sem interrupcoes, e crucial para recarregar as energias e manter o equilibrio emocional.",
              },
              {
                term: "Peca ajuda",
                text: "Em muitos momentos, o autocuidado envolve pedir ajuda. Conversar com um psicologo ou terapeuta pode proporcionar ferramentas importantes para lidar com questoes emocionais e psicologicas.",
              },
            ],
          },
        ],
      },
      {
        heading: "Quebre o estigma",
        blocks: [
          {
            type: "callout",
            tone: "tip",
            title: "Falar e o primeiro passo",
            text: "Falar abertamente sobre saude mental ajuda a reduzir o estigma e encoraja mais mulheres a procurar ajuda sem medo ou vergonha. Quanto mais discutimos o tema, mais natural se torna o autocuidado emocional.",
          },
        ],
      },
    ],
  },
  {
    slug: "corpo-e-bem-estar",
    icon: Activity,
    eyebrow: "Para voce",
    title: "Corpo e bem-estar: habitos que transformam a sua saude",
    accent: "transformam",
    intro:
      "A saude da mulher vai muito alem da ausencia de doencas. Envolve bem-estar fisico, mental e emocional em todas as fases da vida. Adotar habitos saudaveis e um investimento valioso que traz beneficios imediatos e duradouros, prevenindo problemas futuros e promovendo qualidade de vida.",
    heroLabel: "Habitos saudaveis",
    readTime: "6 min de leitura",
    sections: [
      {
        heading: "Atividade fisica",
        blocks: [
          {
            type: "paragraph",
            text: "A pratica regular de atividade fisica e um dos pilares fundamentais para a saude da mulher. Muito alem da estetica, o exercicio atua em diversos sistemas do corpo, promovendo equilibrio hormonal, fortalecimento muscular e osseo, melhora cardiovascular e controle do peso corporal.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Recomendacao da OMS",
            text: "A OMS recomenda a pratica de exercicios fisicos por 30 minutos, por pelo menos cinco vezes na semana.",
          },
        ],
      },
      {
        heading: "Alimentacao saudavel",
        blocks: [
          {
            type: "paragraph",
            text: "Uma alimentacao balanceada e a chave para manter a boa saude. No caso da mulher, e ainda mais importante ter uma alimentacao rica em nutrientes para afastar as doencas que acometem mais o sexo feminino. De prioridade a frutas, legumes, graos integrais, verduras, proteinas magras e laticinios magros. Evite frituras, bebidas alcoolicas e o consumo excessivo de sal.",
          },
        ],
      },
      {
        heading: "Sono e descanso",
        blocks: [
          {
            type: "paragraph",
            text: "A falta de sono pode afetar negativamente o sistema imunologico, a saude mental e ate mesmo o peso corporal. Estabelecer uma rotina de sono consistente, criar um ambiente propicio para dormir e dedicar tempo suficiente para o descanso sao praticas essenciais para a saude geral.",
          },
        ],
      },
      {
        heading: "Prevencao e check-up",
        blocks: [
          {
            type: "paragraph",
            text: "Fazer exames medicos regulares e uma forma eficaz de prevencao. Mamografias, papanicolau, testes de pressao arterial e exames de sangue sao exemplos de ferramentas importantes para detectar precocemente possiveis problemas de saude.",
          },
          {
            type: "callout",
            tone: "alert",
            title: "O diagnostico precoce salva",
            text: "O diagnostico precoce aumenta significativamente as chances de tratamento bem-sucedido. Mantenha seus exames em dia.",
          },
        ],
      },
    ],
  },
  {
    slug: "janela-fertil",
    icon: Moon,
    eyebrow: "Fertilidade",
    title: "Janela fertil: conheca o melhor momento do seu ciclo",
    accent: "Janela fertil",
    intro:
      "A janela fertil e o periodo do ciclo menstrual em que as chances de engravidar sao maiores. Entender esse momento e essencial tanto para quem deseja engravidar quanto para quem quer evitar uma gravidez de forma natural.",
    heroLabel: "Periodo fertil",
    readTime: "5 min de leitura",
    sections: [
      {
        heading: "O que e a janela fertil?",
        blocks: [
          {
            type: "paragraph",
            text: "A janela fertil corresponde aos dias em que a mulher esta mais propicia a engravidar. Ela dura em media 6 dias: os 5 dias anteriores a ovulacao e o proprio dia da ovulacao. Isso acontece porque os espermatozoides podem sobreviver no corpo feminino por ate 5 dias, enquanto o ovulo tem vida util de apenas 12 a 24 horas apos ser liberado.",
          },
        ],
      },
      {
        heading: "Como calcular a janela fertil?",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Pelo ciclo",
                text: "Em um ciclo de 28 dias, a ovulacao ocorre geralmente no 14o dia. A janela fertil seria do 9o ao 15o dia.",
              },
              {
                term: "Pela temperatura basal",
                text: "A temperatura corporal sobe levemente (0,2C a 0,5C) apos a ovulacao. Medir a temperatura todos os dias ao acordar ajuda a identificar o padrao.",
              },
              {
                term: "Pelo muco cervical",
                text: "Proximo a ovulacao, o muco vaginal fica mais transparente, elastico e escorregadio, semelhante a clara de ovo.",
              },
              {
                term: "Por aplicativos",
                text: "Existem apps especializados que calculam a janela fertil com base nos dados do ciclo inseridos pela usuaria.",
              },
            ],
          },
        ],
      },
      {
        heading: "Sinais do corpo durante a janela fertil",
        blocks: [
          {
            type: "list",
            items: [
              { text: "Leve dor ou colica no lado do abdomen (mittelschmerz)" },
              { text: "Aumento do desejo sexual" },
              { text: "Muco cervical mais elastico e transparente" },
              { text: "Leve sensibilidade nos seios" },
              { text: "Aumento da temperatura basal" },
            ],
          },
        ],
      },
      {
        blocks: [
          {
            type: "callout",
            tone: "alert",
            title: "Atencao",
            text: "A janela fertil pode variar de ciclo para ciclo, especialmente em mulheres com ciclos irregulares. Consulte um ginecologista para um acompanhamento mais preciso.",
          },
        ],
      },
    ],
  },
  {
    slug: "tentando-engravidar",
    icon: Heart,
    eyebrow: "Fertilidade",
    title: "Tentando engravidar: dicas e orientacoes para essa jornada",
    accent: "Tentando engravidar",
    intro:
      "A decisao de ter um filho e uma das mais importantes da vida. Para muitos casais, a gravidez acontece naturalmente, mas para outros pode levar mais tempo. Conhecer o proprio corpo e adotar habitos saudaveis faz toda a diferenca nessa jornada.",
    heroLabel: "Planejando a gestacao",
    readTime: "6 min de leitura",
    sections: [
      {
        heading: "Por onde comecar?",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              {
                text: "Consulte um ginecologista antes de comecar a tentar, para realizar exames de rotina e garantir que voce esta em boa saude reprodutiva.",
              },
              {
                text: "Inicie a suplementacao de acido folico (400 a 800 mcg/dia), idealmente 3 meses antes de tentar engravidar, para prevenir malformacoes no tubo neural do bebe.",
              },
              {
                text: "Conheca o seu ciclo menstrual e identifique sua janela fertil para otimizar as tentativas.",
              },
            ],
          },
        ],
      },
      {
        heading: "Habitos que aumentam as chances",
        blocks: [
          {
            type: "list",
            items: [
              { text: "Manter um peso saudavel, pois tanto o excesso quanto a falta de peso podem prejudicar a ovulacao." },
              { text: "Praticar atividade fisica moderada regularmente." },
              { text: "Ter uma alimentacao rica em folato, ferro, calcio e vitaminas." },
              { text: "Reduzir o consumo de cafeina e eliminar o alcool e o cigarro." },
              { text: "Controlar o estresse, pois ele pode afetar diretamente a ovulacao e a qualidade dos espermatozoides do parceiro." },
            ],
          },
        ],
      },
      {
        heading: "Com que frequencia tentar?",
        blocks: [
          {
            type: "paragraph",
            text: "Recomenda-se ter relacoes sexuais a cada 2 ou 3 dias ao longo do ciclo, com maior frequencia durante a janela fertil. Isso garante que sempre haja espermatozoides disponiveis no momento da ovulacao.",
          },
        ],
      },
      {
        heading: "Quando buscar ajuda medica?",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Menos de 35 anos",
                text: "Apos 12 meses de tentativas sem sucesso.",
              },
              {
                term: "35 anos ou mais",
                text: "Apos 6 meses de tentativas.",
              },
              {
                term: "Em qualquer idade",
                text: "Se houver historico de irregularidade menstrual, endometriose, SOP ou outras condicoes.",
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Lembre-se",
            text: "Cada corpo e unico. Nao se compare com outras pessoas e respeite o seu tempo. O suporte emocional de parceiros, familia e profissionais de saude e fundamental nessa fase.",
          },
        ],
      },
    ],
  },
  {
    slug: "anticoncepcao",
    icon: Lock,
    eyebrow: "Fertilidade",
    title: "Anticoncepcao: conheca os metodos e escolha o melhor para voce",
    accent: "o melhor para voce",
    intro:
      "A anticoncepcao e o conjunto de metodos utilizados para prevenir uma gravidez nao planejada. Existe uma grande variedade de opcoes disponiveis, e a escolha do metodo ideal deve ser feita em conjunto com um profissional de saude, levando em conta o estilo de vida, a saude hormonal e os planos futuros de cada mulher.",
    heroLabel: "Metodos contraceptivos",
    readTime: "7 min de leitura",
    sections: [
      {
        heading: "Metodos hormonais",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Pilula anticoncepcional",
                text: "Tomada diariamente, age impedindo a ovulacao. Existem versoes combinadas (estrogenio + progesterona) e de progesterona isolada (minipilula).",
              },
              {
                term: "Injecao anticoncepcional",
                text: "Pode ser mensal ou trimestral. Pratica para quem tem dificuldade de lembrar de tomar a pilula diariamente.",
              },
              {
                term: "Adesivo transdermico",
                text: "Colado na pele, libera hormonios de forma continua. Trocado semanalmente por 3 semanas, com uma semana de pausa.",
              },
              {
                term: "Anel vaginal",
                text: "Inserido na vagina por 3 semanas, libera hormonios localmente com menos efeitos sistemicos.",
              },
              {
                term: "Implante subdermico",
                text: "Pequeno bastao inserido sob a pele do braco, com duracao de ate 3 anos. Alta eficacia.",
              },
              {
                term: "DIU hormonal",
                text: "Dispositivo intrauterino que libera progesterona localmente. Pode durar de 3 a 8 anos dependendo do modelo.",
              },
            ],
          },
        ],
      },
      {
        heading: "Metodos nao hormonais",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "DIU de cobre",
                text: "Dispositivo intrauterino sem hormonios. Age como espermicida natural e pode durar ate 10 anos. Tambem pode ser usado como contracepcao de emergencia.",
              },
              {
                term: "Preservativo masculino e feminino",
                text: "Unico metodo que protege simultaneamente contra gravidez e ISTs (Infeccoes Sexualmente Transmissiveis).",
              },
              {
                term: "Diafragma",
                text: "Barreira fisica inserida antes da relacao sexual, utilizado com espermicida.",
              },
              {
                term: "Metodos comportamentais",
                text: "Tabelinha, temperatura basal e monitoramento do muco cervical. Menor eficacia e requerem ciclos regulares.",
              },
            ],
          },
        ],
      },
      {
        heading: "Contracepcao de emergencia",
        blocks: [
          {
            type: "callout",
            tone: "alert",
            title: "Use apenas em emergencias",
            text: "A pilula do dia seguinte deve ser usada apenas em situacoes de emergencia, como relacao desprotegida ou falha do metodo contraceptivo. Nao deve ser utilizada como metodo regular, pois possui alta dose hormonal e menor eficacia comparada aos metodos continuos.",
          },
        ],
      },
      {
        heading: "Como escolher o metodo certo?",
        blocks: [
          {
            type: "paragraph",
            text: "Converse com seu ginecologista. Fatores como historico de saude, pressao arterial, enxaqueca, tabagismo, amamentacao e planos de gravidez futura influenciam diretamente na indicacao do metodo mais seguro e eficaz para voce.",
          },
        ],
      },
    ],
  },
  {
    slug: "saude-hormonal",
    icon: Activity,
    eyebrow: "Fertilidade",
    title: "Saude hormonal: o equilibrio que sustenta tudo",
    accent: "equilibrio",
    intro:
      "Os hormonios sao mensageiros quimicos que regulam praticamente todas as funcoes do corpo feminino: o ciclo menstrual, o humor, o sono, o peso, a libido, a fertilidade e muito mais. Quando estao em equilibrio, o corpo funciona bem. Quando ha desequilibrio, os sintomas podem ser variados e impactar profundamente a qualidade de vida.",
    heroLabel: "Equilibrio hormonal",
    readTime: "8 min de leitura",
    sections: [
      {
        heading: "Principais hormonios femininos",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "Estrogenio",
                text: "Regula o ciclo menstrual, protege os ossos, influencia o humor e a libido.",
              },
              {
                term: "Progesterona",
                text: "Prepara o utero para a gravidez, regula o ciclo e tem efeito calmante no sistema nervoso.",
              },
              {
                term: "Testosterona",
                text: "Presente em menor quantidade nas mulheres, influencia a libido, a energia e a massa muscular.",
              },
              {
                term: "FSH e LH",
                text: "Hormonios produzidos pela hipofise que controlam a ovulacao e a producao de estrogenio e progesterona.",
              },
              {
                term: "Insulina",
                text: "Regula o acucar no sangue. O desequilibrio pode afetar os hormonios reprodutivos.",
              },
              {
                term: "Cortisol",
                text: "O hormonio do estresse. Em excesso, pode suprimir a ovulacao e desregular o ciclo.",
              },
              {
                term: "Hormonios da tireoide (T3 e T4)",
                text: "Afetam o metabolismo, o humor, o peso e a regularidade do ciclo menstrual.",
              },
            ],
          },
        ],
      },
      {
        heading: "Sinais de desequilibrio hormonal",
        blocks: [
          {
            type: "list",
            items: [
              { text: "Ciclos menstruais irregulares ou ausentes" },
              { text: "Acne persistente, especialmente no queixo e pescoco" },
              { text: "Queda de cabelo ou excesso de pelos no corpo" },
              { text: "Ganho ou perda de peso sem causa aparente" },
              { text: "Fadiga constante e dificuldade de concentracao" },
              { text: "Alteracoes de humor, ansiedade ou depressao" },
              { text: "Baixa libido" },
              { text: "Dificuldade para engravidar" },
            ],
          },
        ],
      },
      {
        heading: "Condicoes hormonais mais comuns",
        blocks: [
          {
            type: "list",
            items: [
              {
                term: "SOP (Sindrome dos Ovarios Policisticos)",
                text: "Excesso de androgenos que causa irregularidade menstrual, acne e dificuldade para engravidar.",
              },
              {
                term: "Hipotireoidismo e Hipertireoidismo",
                text: "Disfuncoes da tireoide que afetam o metabolismo e o ciclo menstrual.",
              },
              {
                term: "Endometriose",
                text: "Relacionada ao desequilibrio de estrogenio, causa dor intensa e pode comprometer a fertilidade.",
              },
              {
                term: "Menopausa precoce",
                text: "Queda abrupta dos niveis de estrogenio antes dos 40 anos.",
              },
            ],
          },
        ],
      },
      {
        heading: "Como cuidar da saude hormonal",
        blocks: [
          {
            type: "list",
            items: [
              { text: "Alimentacao anti-inflamatoria, rica em fibras, gorduras boas e micronutrientes." },
              { text: "Pratica regular de exercicios fisicos, evitando o excesso." },
              { text: "Gerenciamento do estresse com tecnicas como meditacao, yoga e respiracao consciente." },
              { text: "Sono de qualidade (7 a 9 horas por noite)." },
              { text: "Evitar disruptores endocrinos presentes em plasticos, pesticidas e cosmeticos com parabenos." },
              { text: "Acompanhamento medico com exames hormonais periodicos." },
            ],
          },
        ],
      },
    ],
  },
];

export const learnPagesBySlug = Object.fromEntries(
  learnPages.map((p) => [p.slug, p])
);
