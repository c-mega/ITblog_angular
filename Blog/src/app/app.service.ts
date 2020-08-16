import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  arrPosts: Post[];

  constructor() {


    this.arrPosts = [


      {
        id: 1,
        titulo: 'Full Stack, Front End, Back End—What Does it All Mean?',
        autor: 'Scott Morris',
        categoria: 'developers',
        imagen: 'https://i.pinimg.com/564x/be/c3/2f/bec32ffc65cf051af7bf2c71a9af424d.jpg',
        texto: 'I used to think that you were either a web designer or a web developer. Or maybe you were one of those rare unicorns who did both. But either way, you either worked on the design of the site, or the code that made it work. And then I started seeing all these job listings asking for “front end developers” or “back end developers” and even “full stack developers.” Um. What the heck is a full stack developer? As the Web has grown more complex and as more becomes possible on the Internet, developers have gotten more specialized. That means that web development now means a lot of different things depending on what a web developer specializes in. Here are the three main categories: front end development (the visible parts of a website or app),back end development (the “under the hood” databases and infrastructure), full stack development (a hybrid of both). Full stack can apply to a web stack, mobile stack, or a native application stack (i.e. software programs for specific devices)To understand what each of the web developer specialties (or in the case of full stack web developers, non-specialties) are, we’ve created a guide breaking them all down, along with the skills you need to learn to become a full stack developer—if that’s your thing.',
        fecha: '2020-08-12'
      },

      {
        id: 2,
        titulo: 'What do UX designers make in comparison to other tech professions?',
        autor: 'Nick Kolakowski',
        categoria: 'ux',
        imagen: 'https://miro.medium.com/max/1024/1*mcbxrQ9dmgX6v8KA7Uo4nw.jpeg',
        texto: 'The most recent Dice Salary Report pegs the average technology salary at $94,000 in 2019, a 1.3 percent increase from 2018. Software developers at top companies such as Apple and Google can easily earn more than $150,000 per year, once you factor in bonuses, stock options, and other kinds of compensation.UX designers with lots of experience and a solid portfolio can land a salary competitive with those numbers. For example, Burning Glass suggests that UX designers in the 90th percentile for compensation can make $128,115 per year, on average. Those kind of numbers, though, generally come after a decade or more of working.',
        fecha: '2020-08-10'
      },

      {
        id: 3,
        titulo: 'Why becoming a data scientist is NOT actually easier than you think',
        autor: 'Joseph Misisiti',
        categoria: 'datascience',
        imagen: 'https://www.palermo.edu/Archivos_content/2019/cursos/ingenieria/datascience/programa-fundamentos-data-science-up.jpg',
        texto: 'The most recent Dice Salary Report pegs the average technology salary at $94,000 in 2019, a 1.3 percent increase from 2018. Software developers at top companies such as Apple and Google can easily earn more than $150,000 per year, once you factor in bonuses, stock options, and other kinds of compensation.UX designers with lots of experience and a solid portfolio can land a salary competitive with those numbers. For example, Burning Glass suggests that UX designers in the 90th percentile for compensation can make $128,115 per year, on average. Those kind of numbers, though, generally come after a decade or more of working.',
        fecha: '2020-08-08'
      }

    ];
  }

  agregarPost(Post): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.arrPosts.push(Post);
      resolve('Este post se ha agregado correctamente');

    });


  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts);
    });
  }

  getPostByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts.filter(publicacion => {
        return publicacion.categoria === pCategoria;
      }));
    });
  }

  getById(pId): Promise<Post> { //para recuperar al post por su id
    return new Promise((resolve, reject) => {
      let post = this.arrPosts.find(p => {
        return p.id === parseInt(pId);
      });
      resolve(post);
    });
  }




}
