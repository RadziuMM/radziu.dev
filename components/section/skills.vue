<template>
  <section class="SectionSkills">
    <div class="SectionSkills__wrapper">
      <AppHeading id="SkillsSection" element="h2">
        {{ $t('skills.title') }}
      </AppHeading>
      <ul class="SectionSkills__list">
        <li v-for="item in list" :key="item.name" class="SectionSkills__tech">
          <div class="tech__title">{{ item.name }}</div>
          <ul class="tech__list">
            <li v-for="icon in item.stack" :key="icon.name" class="tech__item">
              <nuxt-img
                class="tech__icon"
                :src="icon.icon"
                :alt="icon.name"
                width="45"
                height="45"
                quality="80"
                loading="lazy"
              />
              <div class="tech__name">{{ icon.name }}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
  const list: any[] = [
    {
      name: 'Frontend',
      stack: [
        { name: 'html', icon: '/img/skills/html5.svg' },
        { name: 'css', icon: '/img/skills/css3.svg' },
        { name: 'Sass', icon: '/img/skills/sass.svg' },
        { name: 'javaScript', icon: '/img/skills/javascript.svg' },
        { name: 'typeScript', icon: '/img/skills/typescript.svg' },
        { name: 'vue.js', icon: '/img/skills/vuejs.svg' },
        { name: 'nuxt.js', icon: '/img/skills/nuxtjs.svg' },
        { name: 'graphQL', icon: '/img/skills/graphql.svg' },
      ],
    },
    {
      name: 'Backend',
      stack: [
        { name: 'node', icon: '/img/skills/nodejs.svg' },
        { name: 'javaScript', icon: '/img/skills/javascript.svg' },
        { name: 'typeScript', icon: '/img/skills/typescript.svg' },
        { name: 'php', icon: '/img/skills/php.svg' },
        { name: 'nest', icon: '/img/skills/nestjs.svg' },
        { name: 'express', icon: '/img/skills/express.svg' },
        { name: 'mongoDB', icon: '/img/skills/mongodb.svg' },
        { name: 'MySQL', icon: '/img/skills/mysql.svg' },
        { name: 'Redis', icon: '/img/skills/redis.svg' },
      ],
    },
    {
      name: 'Devops',
      stack: [
        { name: 'linux', icon: '/img/skills/linux.svg' },
        { name: 'bash', icon: '/img/skills/bash.svg' },
        { name: 'python', icon: '/img/skills/python.svg' },
        { name: 'docker', icon: '/img/skills/docker.svg' },
        { name: 'git', icon: '/img/skills/git.svg' },
      ],
    },
    {
      name: 'Game development',
      stack: [
        { name: 'unreal engine 5', icon: '/img/skills/unrealengine.svg' },
        { name: 'unity', icon: '/img/skills/unity.svg' },
        { name: 'c++', icon: '/img/skills/cplusplus.svg' },
        { name: 'c#', icon: '/img/skills/csharp.svg' },
      ],
    },
    {
      name: 'Project management',
      stack: [
        { name: 'Scrum', icon: '/img/skills/scrum.webp' },
        { name: 'Jira', icon: '/img/skills/jira.svg' },
        { name: 'Confluence', icon: '/img/skills/confluence.svg' },
        { name: 'Trello', icon: '/img/skills/trello.svg' },
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
      font-size: 2rem;
      color: rgba(var(--color-base), 1);
      text-align: center;
      text-transform: uppercase;
    }

    &__list {
      color: rgba(var(--color-base), 1);
    }

    &__tech {
      margin-bottom: 1rem;

      .tech {
        &__title {
          font-size: 1.5rem;
          border-bottom: .3rem solid rgba(var(--color-base), 1);
          padding: 0 0 0 .5rem;
          text-transform: uppercase;
        }

        &__list {
          padding: 1.5rem 1rem;
          gap: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        &__item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        &__icon {
          height: 2.8125rem;
        }

        &__name {
          padding-top: .2rem;
          text-transform: uppercase;          
        }
      }
    }

    @media (min-width: $breakpointTablet) {
      &__tech {
        margin-bottom: 2rem;

        .tech {
          &__list {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        }
      }
    }

    @media (min-width: $breakpointDesktop) {
      &__tech {
        margin-bottom: 2rem;

        .tech {
          &__list {
            margin-top: 2rem;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            gap: 6rem 0;
          }
        }
      }
    }
  }
</style>