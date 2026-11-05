// Edit the story here. Line format: [speaker, text, expressions?, music mood?, voice-over file?]
// Speakers: R Rinchen (Narrator), L Lekzin, K Kuenga, M Namling, T Teacher, A All, ~ stage direction
const WHO={R:'Rinchen (Narrator)',L:'Lekzin',K:'Kuenga',M:'Namling',T:'Teacher',A:'All Members Together',N:''};
const VOICE_OVER=true,VO_PATH='assets/audio/vo/'; // voice-over on; set false to run without recordings
const SFX_FILES=true,SFX_PATH='assets/audio/sfx/'; // sound effects use laugh/gasp/applause/discussion.mp3 from assets/audio/sfx/; set SFX_FILES=false for generated sounds
const VO_SPEED=1; // 1 = normal. Try 1.1 to shorten total time (pitch stays natural)
const CHAR={
  R:{n:'Rinchen',c:'#2e7d6b',c2:'#f2c14e',t:'kira',h:'#2b1b17',s:'#e8b98f',st:'pony',acc:'#2e9b4e'},
  L:{n:'Lekzin',c:'#b03a2e',c2:'#f2c14e',t:'kira',h:'#1f1410',s:'#d9a577',st:'braid',acc:'#e0a526'},
  K:{n:'Kuenga',c:'#2c5aa0',c2:'#ffffff',t:'kira',h:'#2b1b17',s:'#e8b98f',st:'bob'},
  M:{n:'Namling',c:'#5b4636',c2:'#d9a441',t:'gho',h:'#1f1410',s:'#d9a577',st:'boy'},
  T:{n:'Teacher',c:'#7a2e7a',c2:'#f2c14e',t:'kira',h:'#3a2a24',s:'#e1ac80',st:'bun',acc:'#e0a526',glasses:1}
};
const SCENES=[
{t:`The Smartest Student in the Universe`,time:`0:00-0:50`,m:'playful',alt:'A Bhutanese classroom with a window onto mountains and a dzong. All five characters stand in a row.',
 cast:{R:70,L:230,K:400,M:560,T:710},
 spots:[{x:56,y:50,t:`When a joke hurts`,b:`A joke about how someone learns can feel like a label. Before you laugh, ask: would I say this to Lekzin's face? Laughing together is fun. Laughing at someone is not.`}],
 lines:[
 ['R',`Welcome to Class VIII! A classroom where one student thinks they are a genius, another loves making jokes, and one student is about to teach everyone a lesson they will never forget!`],
 ['K',`Everybody relax! The class topper has arrived. If intelligence were money, I would own the whole country!`],
 ['M',`Really? Then why did you borrow my pen yesterday?`],
 ['K',`That was a financial investment!`],
 ['~',`[Everyone laughs.]`,null,null,null,'laugh'],
 ['T',`All right, comedians! Today, you will work in groups to design a poster about creating an inclusive school environment.`],
 ['L',`Teacher, could you please explain the instructions one more time? I need a little more time to understand them.`,{L:'flat'}],
 ['K',`Again? We haven't even started, and you're already asking questions!`],
 ['M',`Maybe Kuenga's brain is running on Wi-Fi, and Lekzin's is still connecting!`],
 ['~',`[The class laughs. Lekzin smiles awkwardly and becomes quiet.]`,{L:'flat'},null,null,'laugh'],
 ['R',`Everyone laughed, but not everyone found it funny. What seemed like a harmless joke to some became a hurtful experience for someone else. Sometimes, judging people based on their differences is where stigma begins.`,{L:'sad'},'sad']
]},
{t:`The World's Worst Group Project`,time:`0:50-1:45`,m:'sad',alt:'Lekzin sits alone with a blank sheet while Kuenga and Namling work together on the right.',paper:1,
 cast:{R:70,L:170,K:500,M:650},ex:{L:'sad'},
 spots:[
 {x:50,y:30,t:`Stigma and discrimination`,b:`<p><b>Stigma</b> is when people develop negative beliefs or stereotypes about others because of their differences.</p><p><b>Discrimination</b> is when those beliefs result in unfair treatment, exclusion or denial of opportunities.</p>`},
 {x:21,y:44,t:`What would you do?`,b:`<p>You see Lekzin sitting alone. What do you do?</p>`,q:[
  [`Stay quiet. It is not my problem.`,`Silence lets exclusion continue. Even one small action can change how someone feels.`],
  [`Invite Lekzin to my group and explain the task clearly.`,`Yes! Inviting and supporting someone is inclusion in action.`],
  [`Tell everyone it was only a joke.`,`Calling it a joke does not undo the hurt. Listening first is a better step.`]]}],
 lines:[
 ['~',`[Students begin forming groups. Kuenga and Namling start working together.]`,null,null,null,'discussion'],
 ['L',`Can I join your group?`],
 ['K',`Sorry, we need fast workers. This project is a race, not a sleeping competition!`],
 ['M',`Don't worry, Lekzin. Kuenga thinks making a poster is the Olympics!`],
 ['~',`[They laugh. Lekzin looks disappointed.]`,null,null,null,'laugh'],
 ['L',`It's okay. I'll work alone.`],
 ['R',`Lekzin was left out of the group simply because they needed more time to understand the instructions. The jokes and exclusion gradually made Lekzin feel unwanted.`],
 ['~',`[Show Lekzin sitting alone with a blank sheet of paper.]`],
 ['L',`(thinking aloud) Maybe I should stop asking questions. Maybe my ideas aren't good enough.`],
 ['~',`[Meanwhile, Kuenga and Namling struggle with their poster.]`,{K:'flat',M:'flat'},null,null,'discussion'],
 ['K',`Why does this poster look like a potato wearing sunglasses?`],
 ['M',`Because the artist is a genius, apparently!`],
 ['~',`[They laugh at their own poster.]`,{K:'smile',M:'smile'},null,null,'laugh'],
 ['R',`Here's the problem: stigma happens when people develop negative beliefs or stereotypes about others because of their differences. Discrimination occurs when those beliefs result in unfair treatment, exclusion or denial of opportunities.`]
]},
{t:`The Unexpected Plot Twist`,time:`1:45-2:35`,m:'curious',alt:'Lekzin shows a colourful poster to Kuenga and Namling, who look surprised.',poster:1,
 cast:{R:70,L:250,K:430,M:610},ex:{L:'smile',K:'flat',M:'flat'},
 spots:[{x:50,y:22,t:`Strengths and support`,b:`Needing support in one area does not mean lacking talent in another. Offering drawings, speaking, writing and hands-on ways to learn helps every learner, not only those who need extra support.`}],
 lines:[
 ['~',`[Lekzin notices the group's unfinished poster and approaches them.]`],
 ['L',`Can I suggest something? What if we use drawings instead of writing everything? I could sketch the main ideas.`],
 ['K',`You? But you needed the instructions repeated!`],
 ['L',`Yes, I needed them explained more clearly. That doesn't mean I have no ideas.`],
 ['~',`[Lekzin starts drawing a colourful poster showing students supporting one another. The others watch with surprise.]`,{K:'open',M:'open'},null,null,'gasp'],
 ['M',`Wait a minute! That looks better than our potato!`],
 ['K',`How did you do that?`],
 ['L',`I like drawing. It helps me express my ideas.`],
 ['M',`So, we've been judging the artist before even seeing the artwork!`,{M:'smile'}],
 ['R',`Suddenly, the students discovered something important. Needing support in one area does not mean someone lacks talent, intelligence or potential in other areas. Every learner has different strengths and may require different kinds of support.`]
]},
{t:`A Lesson Beyond the Classroom`,time:`2:35-3:40`,m:'warm',alt:'The teacher talks with all four students gathered around.',poster:1,
 cast:{R:70,L:230,K:400,M:560,T:710},ex:{L:'flat',K:'flat',M:'flat'},
 spots:[
 {x:90,y:50,t:`Equal does not mean identical`,b:`Inclusion does not mean treating everyone identically. It means recognising individual needs and providing the support and opportunities necessary for everyone to participate and learn.`},
 {x:50,y:78,t:`In our schools`,b:`Bhutan's schools are working towards inclusion for learners with special educational needs. The idea of Gross National Happiness reminds us that a happy school is one where everyone belongs. What can your class do this week?`}],
 lines:[
 ['~',`[The teacher notices the situation and approaches the group.]`],
 ['T',`Well, well! It looks like we have discovered an artist in our classroom. But tell me, what happened earlier?`,{T:'smile'}],
 ['L',`I wanted to join the group, but they thought I would be too slow because I needed more time to understand the instructions.`,{L:'sad'}],
 ['T',`I see. Kuenga and Namling, what do you think about that?`],
 ['K',`I thought needing more time meant someone couldn't contribute equally. But I was wrong.`,{K:'sad'}],
 ['M',`And I thought my jokes were harmless. I didn't realise they could make someone feel excluded.`,{M:'sad'}],
 ['T',`That's an important lesson. Stigma and discrimination can prevent learners from feeling accepted and participating fully in school activities.`],
 ['K',`So, how can we prevent it?`],
 ['T',`It starts with simple actions. Respect individual differences, avoid hurtful labels, listen to others and provide support when someone needs it.`],
 ['M',`So, instead of expecting everyone to learn in exactly the same way, we should give everyone a fair opportunity to participate?`,{L:'smile',M:'flat'}],
 ['T',`Exactly! Inclusion does not mean treating everyone identically. It means recognising individual needs and providing the support and opportunities necessary for everyone to participate and learn.`],
 ['R',`An inclusive classroom is not one where differences are ignored. It is one where differences are respected and every learner is given the opportunity to belong.`]
]},
{t:`Different Abilities, Equal Opportunities`,time:`3:40-4:30`,m:'hopeful',alt:'All five members stand together holding their finished poster.',poster:1,
 cast:{R:70,L:230,K:400,M:560,T:710},ex:{L:'smile',K:'smile',M:'smile',T:'smile',R:'smile'},
 spots:[{x:50,y:20,t:`Your pledge`,b:`<p>Four simple actions from our teacher: respect differences, avoid hurtful labels, listen, and support others. Pick one to practise tomorrow.</p>`}],
 lines:[
 ['~',`[Kuenga approaches Lekzin.]`],
 ['K',`Lekzin, I'm sorry for judging you and making you feel excluded. Would you like to work with us? We could really use your drawing skills.`],
 ['L',`Of course! I'd love to.`],
 ['M',`And this time, no potato posters! We're making something everyone can be proud of!`],
 ['~',`[Everyone laughs and works together on the poster.]`,null,null,null,'laugh,discussion'],
 ['T',`Remember, every learner deserves respect, acceptance and equal opportunities. We should never allow someone's differences to become a reason for exclusion.`],
 ['R',`A learner's ability should never be judged by how quickly they complete a task, how they communicate or how differently they learn. When we challenge stereotypes, reject discrimination and support one another, we create a school where everyone belongs.`],
 ['~',`[All five members stand together, holding their completed poster.]`],
 ['A',`"Different abilities, equal opportunities! Stop stigma, end discrimination! Inclusion starts with us!"`]
]}];
