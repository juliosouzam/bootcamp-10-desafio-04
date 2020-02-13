import React from 'react';

import './style.css';

import Post from '../Post';

export default class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Júlio César',
          avatar: 'https://avatars3.githubusercontent.com/u/5223253?v=4',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            },
            content:
              'Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
          {
            id: 2,
            author: {
              name: 'Júlio César',
              avatar: 'https://avatars3.githubusercontent.com/u/5223253?v=4',
            },
            content:
              'Show, focar nos estudos para estar entre os melhores, vlw.',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Fallon Wheeler',
          avatar: 'https://api.adorable.io/avatars/285/c@adorable.io.png',
        },
        date: '04 Jun 2019',
        content: 'Cê fez esse layout como?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Júlio César',
              avatar: 'https://avatars3.githubusercontent.com/u/5223253?v=4',
            },
            content:
              'Usando ReactJs, fazendo o curso da Rocketseat (Bootcamp GoStack), esse é o desafio de Introdução ao ReactJs.',
          },
          {
            id: 1,
            author: {
              name: 'Fallon Wheeler',
              avatar: 'https://api.adorable.io/avatars/285/c@adorable.io.png',
            },
            content: 'Que massa cara, próxima turma eu vou com certeza. Vlw.',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <main>
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </main>
    );
  }
}
