const splashText: string[] = [
    "You can't fail classes you're not in, that's for sure.",
    'Steer clear of O-Chem, unless you fancy a challenge.',
    'Rec Sports fills up fast, even before the sun reaches its peak.',
    "Ah, Jendy's! A taste ever so refined.",
    'Fine dining at Jester City Limits, eh?',
    'The road to Kinsolving is long, but their delicacies makes it worth every step.',
    'The squirrels, they have mastered begging for food better than students. Impressive... but worrying.',
    "Do you study often? Ha! What am I saying? Of course you don't.",
    "Hey, you, you're finally awake. You were trying to skip class right?",
    'RIP Domino, you beloved campus feline.',
    "The year is 2055 and Welch still isn't finished.",
    'Motivation dropping faster than ur GPA',
    'No Work Happens On PCL 5th Floor.',
    'I may be a sophomore in name, but my credit count screams freshman!',
    'Pain is temporary, GPA is forever.',
    "You've Yee'd Your Last Haw.",
    'lol everything is already waitlisted.',
    'Could be worse. Could be A&M.',
    // 'TeXAs iS BaCK GuYZ',
    'mAke iT yOuR tExAS',
    'change yOur slogan',
    "'Academically Challenged'",
    'Does McCombs teach Parseltongue?',
    'No Cruce Enfrente Del Bus.',
    'Omae Wa Mou Shindeiru...',
    'Every day another brick disappears from Speedway',
    'The GDC will annex the EER one day',
    'To hike to Kins or not to hike to Kins...',
    "C'mon you Longhorns! You want to study forever?",
    'HOW BOUT A NICE CUP OF LIBER TEA',
    "Block of Butter? Now, that's a name I haven't heard in a long time...",
    'CaN YoU aSk OuT a tA aFtEr tHe SeMeStEr Is oVeR AnD gRaDeS ArE DoNe?',
    "The Block of Butter incident of '22",
    'Begun, the midterms have.',
    'You must construct additional schedules',
    "Arrows of Christ vs Church of Scientology was the crossover we didn't know we needed",
    'THE WALK SIGN IS ON TO CROSS GUADALUPE AND 21ST',
    'Pay attention. Might learn something.',
    'Long ago, apartment rates lived together in harmony. Then, everything changed when American Campus Communities Inc attacked.',
    'Roll for Initiative!',
    'The line at the on-campus Starbucks is longer than your course waitlist.',
    'The weather changes more often than your class schedule.',
    'Mmm... Brutalist architecture...',
    'The course syllabus: more than meets the eye',
    "'studying' often means refreshing Canvas every five minutes to see if the professor posted lecture slides.",
    "It's over Bevo! I have the high ground!",
    "I'll just skip this lecture and watch the recording later. What's the worst that could happen?",
    'I hear the tower bells are ringing, PCL full of students dreaming.',
    "I don't like sand",
    'The libraries are full of students pretending to study but actually napping with their eyes open.',
    "The 'campus loop' refers to both the bus route and the endless cycle of trying to find your way around campus.",
    'The squirrels have mastered the art of begging for food better than most students during finals week.',
    "'going for a run' often means 'running to get food from food trucks'.",
    'We got UTRPv2 before GTA 6',
    'Midterm season: Finish the Fight!',
    "There's a Bevo on your lawn!",
    'Veer was here',
    'follow @sghsri!',
    'Officially part of the SEC',
    'Planner is now acquired by Plus',
    'Longhorn-Developers is the best UT Student Org',
    'The Eiffel Tower is the UT Tower of Paris',
    'A pen and paper is old fashioned, but sometimes old ways are best',
    'A heart is like bedrock, destroyable only by cheating',
    'You may not rest now, there are Canvas assignments nearby',
    'You are filled with DETERMINATION',
    '60k+ users!',
    'Almost Turing complete',
    '#BF5700',
    'The waitlist is a lie!',
    `He's a CS Major, but he showers regularly. 🧢`,
    'A CS major walks into a bar. The bar is empty because it is a CS major.',
    'UT Registration Plus - The only thing that can make registration worse is not having it',
    'UT Registration Plus - We make registration slightly less painful. Slightly.',
    'UT Registration Plus - Do you really want to figure out which professors will ruin your GPA by yourself?',
    'Ayo tf is a memory leak',
    "lowkey we never thought we'd get this far, how tf are 60k of you people using this",
    "dang we're really out here making a splash",
    "We'd make a joke about A&M, but we're not sure they can read",
    "We've only caused one or two outages, we swear!",
    'Reality has a slight CNS bias',
    'That one time in 2019 we accidentally DDoSed the registration system. (really)',
    'Best UT financial aid tip? Marry rich.',
    'Bevo Bucks are legal tender',
    "'iS iT fInAlS wEeK oR mY fInAl WeEk'",
    'Do you have an iPhone charger? Wait... Which one?',
    'Deep in the heart of Texas',
    'TEXAS!!! FIGHT!!!',
    'Launder your AP credits through a community college for free',
    'Also try Minecraft!',
    'Please register later so the dev team can get the upper divs',
    'The outdoor warning siren will test around 11:50 a.m.',
    'You may be seeing this page because you used the Back button while browsing a secure web site or application. Alternatively, you may have mistakenly bookmarked the web sign in form instead of the actual web site you wanted to bookmark or used a link created by somebody else who made the same mistake.',
    'Flag on the play, procrastinating picking classes, 1 day penalty, still first down',
    'Pro-fessionals at Pro-crastinating',
    'Built Texas Tough',
    'Beware of trucks on Speedway',
    'Marked as duplicate',
    'If we ever flood, we can use the canoes on Speedway',
    'Days since last Jester West fire alarm: 0',
    'Remember the Alamo!',
    "Figure out next year's housing by October",
    'Technoblade never dies!',
    // eslint-disable-next-line no-template-curly-in-string
    'Why is my ${major} class in the ${unrelatedMajor} build?', // This is on purpose as a joke
    '"Will that be cash, card, or id?"',
    'How much did PepsiCo pay UT to replace all the coke machines?',
    "Do it... take those 8am's",
    "I'm polylingual, if you count programming languages",
    'Just put the classes in the schedule lil bro',
    'The wait is finally over',
    "Stop trying to make UTRP happen, it's not going to happen!",
    'Befriend the raccoons on campus',
    `It's ${new Date().toLocaleString('en-US', { month: 'long', day: 'numeric' })} and OU still sucks`,
    'As seen on TV!	',
    "Should you major in Compsci? well, here's a better question. do you wanna have a bad time?",
    'Also try Terraria!',
    '34-3.',
    'NOT that kind of RP',
];

export default splashText;
