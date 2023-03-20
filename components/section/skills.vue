<template>
  <section class="SectionSkills">
    <div class="SectionSkills__wrapper" id="SkillsSection">
      <h2 class="SectionSkills__title">Skills</h2>
      <ul class="SectionSkills__list">
        <li v-for="item in list" :key="item.name" class="SectionSkills__tech">
          <div class="tech__title">{{ item.name }}</div>
          <ul class="tech__list">
            <li v-for="icon in item.stack" :key="icon.name" class="tech__item">
              <img :src="icon.icon" :alt="icon.name" class="tech__icon">
              <div class="tech__name">{{ icon.name }}</div>
            </li>
          </ul>
        </li>
        <img src="" />
      
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
  const list: any[] = [
    {
      name: 'Frontend',
      stack: [
        { name: 'html', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
        { name: 'css', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
        { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'javaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'typeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
        { name: 'graphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      ],
    },
    {
      name: 'Backend',
      stack: [
        { name: 'node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
        { name: 'javaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'typeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'php', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'nest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
        { name: 'express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg' },
        { name: 'mongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg' },
      ],
    },
    {
      name: 'Devops',
      stack: [
        { name: 'linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg' },
        { name: 'python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      ],
    },
    {
      name: 'Game development',
      stack: [
        { name: 'unreal engine 5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original-wordmark.svg' },
        { name: 'unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg' },
        { name: 'c++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'c#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      ],
    },
    {
      name: 'Projecet menagment',
      stack: [
        { name: 'Scrum', icon: '/img/skills/scrum.png' },
        { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg' },
        { name: 'Confluence', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original-wordmark.svg' },
        { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
      ],
    },
  ];

</script>

<style lang="scss">
  .SectionSkills {
    &__wrapper {
      margin: 0 auto;
      width: auto;
    }

    &__title {
      font-size: 2.5rem;
      color: white;
      text-align: center;
      text-transform: uppercase;
    }

    &__list {
      color: white;
      list-style: none;
    }

    &__tech {
      .tech {
        &__title {
          font-size: 1.5rem;
          border-bottom: .3rem solid white;
          padding: 0 0 0 .5rem;
          text-transform: uppercase;
        }

        &__list {
          padding: 1.5rem 1rem;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        &__item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        &__icon {
          height: 45px;
          filter: drop-shadow(0px 0px 40px #2ea065);
          // filter: drop-shadow(0px 0px 1px #000);
        }

        &__name {
          padding-top: .2rem;
          text-transform: uppercase;          
        }
      }
    }
  }
</style>