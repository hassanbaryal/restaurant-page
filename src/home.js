import mindImg from './assets/artificial-intelligence-g90d96e1bf_1920.jpg';


export default function createHomePage() {
    const mainContainer = document.createElement('div');
    const heading = document.createElement('h1');
    const para = document.createElement('p');
    const img = document.createElement('img');

    mainContainer.classList.toggle('main-container');
    mainContainer.id = 'home';

    heading.textContent = 'Welcome to the Yogurt';
    para.textContent = 'What is Yogurt? Yogurt is a soft, smooth, pudding-like food that sends the consumer to a state of euphoria. The instant the taste of our products register in your mortal brain, your animal instincts will kick in. And these instincts will drive you to accomplish an uncompletable goal: get more. You will always want more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore corporis velit mollitia ea dicta soluta similique ad error. Architecto quidem dicta facere pariatur iusto? Quasi, quos incidunt. Illo, atque. We are Yogurt.';

    img.src = mindImg;
    img.alt = 'Human Brain';

    mainContainer.appendChild(heading);
    mainContainer.appendChild(para);
    mainContainer.appendChild(img);
    
    document.querySelector('#content').appendChild(mainContainer);
};