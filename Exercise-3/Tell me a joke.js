    let jokes = [
        "What’s the smartest insect? A spelling Wbee!",
        "How does the ocean say hi? It waves!",
        "Name the kind of tree you can hold in your hand? A palm tree!",
        "Where did the music teacher leave her keys? In the piano!",
        "Why do birds fly south in the winter? It’s faster than walking!",
        "Which superhero hits home runs? Batman!",
        "Why did the bird get in trouble at school? For tweeting on a test!",
        "Why is a football stadium always cold? It has lots of fans!",
        "Why did the chicken cross the playground? To get to the other slide?",
        "What kind of math do birds love? Owl-gebra!",
        "How does a barber drive to work? He takes shortcuts!",
        "What kind of shoes do frogs love? Open-toad!",
        "Why do ducks always pay with cash? Because they always have bills!",
        "Where do most horses live? In neigh-borhoods!",
        "Which planet loves to sing? Nep-tune!",
        "Why are basketball courts always wet? Because the players dribble!",
        "What kind of keys are sweet? Cookies!",
        "No need to get so excited; it’s just a joke!",
        "What do you call cheese that belongs to someone else? Nacho cheese!",
        "Why did the peanut get into a rocket? He wanted to be an astro-nut!",
        "What fruit do twins love? Pears!",
        "How do bees brush their hair? With honeycombs!",
        "Why won’t peanut butter tell you a secret? He’s afraid you’ll spread it!",
        "Who eats snails? People who don’t like fast food!",
        "Why did the banana visit the doctor? He wasn’t peeling well!",
        "Why did the computer get sick? It caught a virus!",
        "Why did the teacher have birdseed? For her parrot-teacher conference!",
        "Why are elephants to wrinkly? Have you ever tried to iron one?",
        "Why was the broom late to school? It over-swept!",
        "What is the strongest animal in the sea? Mussels!",
        "What kind of chicken is the funniest? A comedi-hen!",
        "What do you call a seagull that lives by the bay? A bagel!",
        "What color do cats prefer? Purr-ple|",
        "What does a triceratops sit on? Its tricera-bottom!",
        "What is a sleeping dinosaur? A dino-snore!",
        "What kind of pizza do dogs eat? Pup-eroni pizza!",
        "How do you help a baby astronaut fall asleep? You rock-et!",
        "If cars run on gas, what do cats run on? Their paws!",
        "What do cats wear to bed? Paw-jamas!",
        "What kind of pictures do turtles take? Shell-fies!",
        "What do you call a famous turtle? A shell-ebrity!",
        "What do you feed an alligator? Anything it wants!",
        "What makes a sick lemon feel better? Lemon-aid!",
        "How does Spiderman do research? On the World Wide Web!",
        "What’s the largest gem on earth? A baseball diamond!",
        "What do you get if you dip a cat in chocolate? A Kitty-Kat Bar!",
        "What food is never on time? Choco-late!",
        "What cookie flavor do monkeys love? Chocolate Chimp!",
        "Why do hurricanes wear a monocle to see? Because they have one eye!",
        "What did the clock ask the watch? Hour you doing?",
        "What’s the most famous fish? A starfish!",
        "Why don’t oysters share? They’re shell-fish!",
        "Why are fish so intelligent? Because they live in schools!",
        "What kind of fish loves going to battle? A swordfish!",
        "Where do birds invest their money? The stork-market!",
        "What nut has the most money? A cashew!",
        "What do you call a cow who plays the trumpet? A moo-sician!",
        "What’s a pirate’s favorite county? Arrrrgh-entina!",
        "Why can’t Dalmatians win at hide and seek? Because they’re always spotted!",
        "What do newborn kittens wear? Dia-purrs!",
        "What did the little tree say to the big tree? Leaf me alone!",
        "What’s in the recipe for gold soup? Fourteen carrots!",
        "Name Spiderman’s favorite month? Web-ruary!",
        "What’s an astronaut’s favorite meal? Launch!",
        "Why can’t noses be 12 inches long? They’d be a foot!",
        "What does it sound like when a nut sneezes? Ca-shew!",
        "Where do smart burgers sit? On honor rolls!",
        "Which holiday do cows enjoy most? Moo-Year’s Day!",
        "Why can’t bicycles stand on on their own? They’re two-tired!",
        "Where do you go to school to learn how to greet people? Hi school!",
        "What do cheerleaders eat for breakfast? Cheerios!",
        "How do ice hockey players stay cool? They sit next to the fans!",
        "What’s the hardest part about learning to skydive? The ground!",
        "Why did the piano teacher need a ladder? To reach the high notes!",
        "What kind of fishing bait do librarians use? Book-worms!",
        "Which state is the smartest? Alabama—it has four As and one B!",
        "What state does the most writing? Pennsylvania!",
        "Which country is fastest? Russia!",
        "Why was the math book crying? It had lots of problems!",
        "What’s a math teacher’s favorite season? Sum-mer!",
        "What kind of lights did Noah have on the ark? Flood-lights!",
        "What is the center of gravity? The letter V!",
        "What goes up and never comes down? Your age!",
        "What starts with P and ends with E and has thousands of letters? Post office!",
        "What breaks when you speak? Silence!",
        "What do attorneys wear to court? Law-suits!",
        "Why did the doctor get mad? He ran out of patients!",
        "What notes do pirates love to sing? The high Cs!",
        "What gets more wet the more it dries? A towel!",
        "How are dogs like cell phones? They both have collar id",
        "Why do you go to bed at night? Because the bed won’t go to you!",
        "Which month do trees dislike? Sep-timber!",
        "Why are ducks good at basketball? They make fowl shots!",
        "What kind of dog always knows the time? A watch-dog!",
        `Knock, knock!
Who’s there?
Police.
Police who?
Police let us in! It\’s cold out here!
`,
        `Knock, knock!
Who’s there?
Figs.
Figs who?
Figs the doorbell! It’s broken!`,
        `Knock, knock!
Who’s there?
Lettuce.
Lettuce who?
Lettuce in and we’ll tell you!`,
        `Knock, knock!
Who’s there?
Anita?
Anita who?
Anita borrow a pencil`,
        `Knock, knock!
Who’s there?
Pizza.
Pizza who?
Pizza on earth, good will to men!`,
        `Knock, knock!
Who’s there?
Tank.
Tank who?
You’re welcome!`,
        `Knock, knock!
Who’s there?
Woo.
Woo-hoo!
No need to get so excited; it’s just a joke!`
    ]
    document.getElementsByClassName('container')[0].setAttribute('class','container d-flex align-items-center justify-content-center  rounded-pill mt-5')
    setTimeout(() => {
        document.getElementsByClassName('container')[0].innerHTML = `<h3>${jokes[Math.trunc(Math.random() * 100 + 1)]}</h3>`
    }, 3000)

let callJokes = () => {
    location.reload()
}