import Matter from 'matter-js';
import { SplitText } from 'gsap/all';
import { state } from './settings';

let Engine;
let Render;
let Runner;
let Composite;
let Composites;
let MouseConstraint;
let Common;
let Mouse;
let World;
export let Body;
let Bodies;

export let engine;
export let world;

let render;

const chars = new SplitText('.text-to-canvas h3', { type: 'chars' });


export function matters() {



  Engine = Matter.Engine;
  Render = Matter.Render;
  Runner = Matter.Runner;
  Composite = Matter.Composite;
  Composites = Matter.Composites;
  MouseConstraint = Matter.MouseConstraint;
  Common = Matter.Common;
  Mouse = Matter.Mouse;
  World = Matter.World;
  Body = Matter.Body;
  Bodies = Matter.Bodies;

  engine = Engine.create();
  world = engine.world;

  render = Render.create({
    element: document.querySelector('#canvas'),
    engine: engine,
    options: {
      background: 'transparent',
      wireframes: false,
      width: innerWidth,
      height: innerHeight,
    },
  });
  world.gravity.y = 0;

  // console.log(world);

  const groundOptions = {
    isStatic: true,
    render: {
      fillStyle: 'transparent',
    },
  };

  let groundTop = Bodies.rectangle(innerWidth * 0.5, 0, innerWidth, 20, {
    ...groundOptions,
  });
  let groundBottom = Bodies.rectangle(
    innerWidth * 0.5,
    innerHeight,
    innerWidth,
    20,
    { ...groundOptions }
  );
  let groundLeft = Bodies.rectangle(0, innerHeight * 0.5, 20, innerHeight, {
    ...groundOptions,
  });
  let groundRight = Bodies.rectangle(
    innerWidth,
    innerHeight * 0.5,
    20,
    innerHeight,
    { ...groundOptions }
  );

  Composite.add(world, [groundTop, groundBottom, groundLeft, groundRight]);

  const wordOptions = {
    friction: 0.5,
    restitution: 0.8,
    density: 1,
    render: {
      opacity: 0,
    },
  };
  

  const award = document.querySelector('.award');
  const awardChars = award.querySelectorAll('div');

  let awardStack = Composites.stack(
    innerWidth * 0.4,
    120,
    awardChars.length,
    1,
    0,
    0,
    (x, y, i) => {
      return Bodies.rectangle(
        x,
        y,
        awardChars[i].offsetWidth,
        awardChars[i].offsetHeight,
        { ...wordOptions }
      );
    }
  );

  const winning = document.querySelector('.winning');
  const winningChars = winning.querySelectorAll('div');

  let winningStack = Composites.stack(
    innerWidth * 0.4,
    270,
    winningChars.length,
    1,
    0,
    0,
    (x, y, i) => {
      return Bodies.rectangle(
        x,
        y,
        winningChars[i].offsetWidth,
        winningChars[i].offsetHeight,
        { ...wordOptions }
      );
    }
  );

  const create = document.querySelector('.create');
  const createChars = create.querySelectorAll('div');

  let createStack = Composites.stack(
    innerWidth * 0.4,
    420,
    createChars.length,
    1,
    0,
    0,
    (x, y, i) => {
      return Bodies.rectangle(
        x,
        y,
        createChars[i].offsetWidth,
        createChars[i].offsetHeight,
        { ...wordOptions }
      );
    }
  );

  const team = document.querySelector('.team');
  const teamChars = team.querySelectorAll('div');

  let teamStack = Composites.stack(
    innerWidth * 0.4,
    570,
    teamChars.length,
    1,
    0,
    0,
    (x, y, i) => {
      return Bodies.rectangle(
        x,
        y,
        teamChars[i].offsetWidth,
        teamChars[i].offsetHeight,
        { ...wordOptions }
      );
    }
  );

  Composite.add(world, [awardStack, winningStack, createStack, teamStack]);

  Render.run(render);

  var runner = Runner.create();
  Runner.run(runner, engine);

  var mouse = Mouse.create(render.canvas);

  var mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  Composite.add(world, mouseConstraint);

  render.mouse = mouse;

  function updatePosition() {
    console.log('updating');

    awardChars.forEach((c, i) => {
      c.style.transform = `translate(
        ${awardStack.bodies[i].position.x - c.offsetWidth * 0.5}px,
        ${awardStack.bodies[i].position.y - c.offsetHeight * 0.5}px)rotate(
        ${awardStack.bodies[i].angle}rad)`;
    });

    winningChars.forEach((c, i) => {
      c.style.transform = `translate(
        ${winningStack.bodies[i].position.x - c.offsetWidth * 0.5}px,
        ${winningStack.bodies[i].position.y - c.offsetHeight * 0.5}px)rotate(
        ${winningStack.bodies[i].angle}rad)`;
    });

    createChars.forEach((c, i) => {
      c.style.transform = `translate(
        ${createStack.bodies[i].position.x - c.offsetWidth * 0.5}px,
        ${createStack.bodies[i].position.y - c.offsetHeight * 0.5}px)rotate(
        ${createStack.bodies[i].angle}rad)`;
    });

    teamChars.forEach((c, i) => {
      c.style.transform = `translate(
        ${teamStack.bodies[i].position.x - c.offsetWidth * 0.5}px,
        ${teamStack.bodies[i].position.y - c.offsetHeight * 0.5}px)rotate(
        ${teamStack.bodies[i].angle}rad)`;
    });

    if(state.isPaused) requestAnimationFrame(updatePosition);
  }

  updatePosition();

  var explosion = function (engine) {
    var bodies = Composite.allBodies(engine.world);

    for (var i = 0; i < bodies.length; i++) {
      var body = bodies[i];

      if (!body.isStatic && body.position.x <= 100) {
        var forceMagnitude = 0.01 * body.mass;

        
        Body.applyForce(body, body.position, {
          x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]) ,
          y: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
        });
      }
    }
  };

  return explosion;
}

// export var bodies = Composite.allBodies(engine.world);
