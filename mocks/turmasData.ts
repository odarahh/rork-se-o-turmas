import React from "react";
export interface ContentItem {
  id: string;
  name: string;
  progress: number;
}

export interface TurmaData {
  id: string;
  name: string;
  contents: ContentItem[];
  totalProgress: number;
}

export const turmasData: TurmaData[] = [
  {
    id: '1',
    name: 'Marketing Digital Avançado',
    totalProgress: 100,
    contents: [
      { id: '1-1', name: 'Introdução ao Marketing Digital', progress: 100 },
      { id: '1-2', name: 'SEO e SEM', progress: 100 },
      { id: '1-3', name: 'Marketing de Conteúdo', progress: 100 },
      { id: '1-4', name: 'Redes Sociais', progress: 100 },
      { id: '1-5', name: 'E-mail Marketing', progress: 100 },
      { id: '1-6', name: 'Analytics e Métricas', progress: 100 },
      { id: '1-7', name: 'Automação de Marketing', progress: 100 },
    ],
  },
  {
    id: '2',
    name: 'Gestão de Projetos',
    totalProgress: 0,
    contents: [
      { id: '2-1', name: 'Fundamentos de Gestão', progress: 0 },
      { id: '2-2', name: 'Metodologias Ágeis', progress: 0 },
      { id: '2-3', name: 'Scrum Framework', progress: 0 },
      { id: '2-4', name: 'Kanban', progress: 0 },
      { id: '2-5', name: 'Gestão de Riscos', progress: 0 },
      { id: '2-6', name: 'Liderança de Equipes', progress: 0 },
      { id: '2-7', name: 'Ferramentas de Gestão', progress: 0 },
    ],
  },
  {
    id: '3',
    name: 'Desenvolvimento Web Full Stack',
    totalProgress: 57,
    contents: [
      { id: '3-1', name: 'HTML e CSS', progress: 100 },
      { id: '3-2', name: 'JavaScript Fundamentals', progress: 100 },
      { id: '3-3', name: 'React.js', progress: 85 },
      { id: '3-4', name: 'Node.js', progress: 60 },
      { id: '3-5', name: 'Bancos de Dados', progress: 30 },
      { id: '3-6', name: 'APIs REST', progress: 25 },
      { id: '3-7', name: 'Deploy e DevOps', progress: 0 },
    ],
  },
  {
    id: '4',
    name: 'UX/UI Design',
    totalProgress: 71,
    contents: [
      { id: '4-1', name: 'Princípios de Design', progress: 100 },
      { id: '4-2', name: 'Pesquisa com Usuários', progress: 100 },
      { id: '4-3', name: 'Wireframing', progress: 100 },
      { id: '4-4', name: 'Prototipagem', progress: 90 },
      { id: '4-5', name: 'Design Systems', progress: 60 },
      { id: '4-6', name: 'Testes de Usabilidade', progress: 40 },
      { id: '4-7', name: 'Figma Avançado', progress: 10 },
    ],
  },
  {
    id: '5',
    name: 'Data Science e Machine Learning',
    totalProgress: 43,
    contents: [
      { id: '5-1', name: 'Python para Data Science', progress: 100 },
      { id: '5-2', name: 'Estatística Aplicada', progress: 85 },
      { id: '5-3', name: 'Pandas e NumPy', progress: 75 },
      { id: '5-4', name: 'Visualização de Dados', progress: 50 },
      { id: '5-5', name: 'Machine Learning', progress: 20 },
      { id: '5-6', name: 'Deep Learning', progress: 0 },
      { id: '5-7', name: 'Deploy de Modelos', progress: 0 },
    ],
  },
];
