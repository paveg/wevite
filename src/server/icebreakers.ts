const icebreakers = [
  {
    question: "What is your favorite hobby?",
    description: "Asking about hobbies helps you discover the other person's interests and uniqueness. Finding common hobbies can lead to more engaging conversations."
  },
  {
    question: "Which movie left a lasting impression on you?",
    description: "Discussing movies and memorable scenes can create a strong sense of connection. You may discover shared emotions and favorite films."
  },
  {
    question: "What is your favorite food?",
    description: "Food-related topics have a way of bringing people together. Share delicious dishes or talk about favorite restaurants."
  },
  {
    question: "How do you like to spend your weekends?",
    description: "Learning how someone spends their weekends gives insight into their lifestyle and preferred activities."
  },
  {
    question: "Have you read any interesting books lately?",
    description: "Talking about books and their authors can reveal common reading preferences or introduce each other to new book recommendations."
  },
  {
    question: "What is your dream travel destination?",
    description: "Discussing dream travel destinations or sharing travel experiences can inspire new adventures and create wanderlust."
  },
  {
    question: "Do you have any pets?",
    description: "Sharing stories about adorable pets can create a warm and friendly atmosphere during the conversation."
  },
  {
    question: "What is a skill or talent you're proud of?",
    description: "Asking about skills or talents can lead to discovering each other's accomplishments and areas of expertise."
  },
  {
    question: "Have you started any new hobbies recently?",
    description: "Talking about newly acquired hobbies can lead to exciting discussions about exploring interests and learning new things."
  },
  {
    question: "What are your dreams or goals?",
    description: "Sharing aspirations and visions for the future can help you understand each other's values and motivations."
  },
  {
    question: "Who are your favorite music artists or bands?",
    description: "Music preferences can reveal shared tastes or introduce each other to different genres and artists."
  },
  {
    question: "What did you want to be when you were a child?",
    description: "Recounting childhood dreams and memories can evoke nostalgia and create a sense of camaraderie."
  },
  {
    question: "Are there any games or apps you're currently obsessed with?",
    description: "Discussing favorite games or apps can lead to fun conversations about digital entertainment and recommendations."
  },
  {
    question: "Do you enjoy any sports or support any teams?",
    description: "Sports-related discussions can bring out passionate feelings and shared enthusiasm for teams or athletes."
  },
  {
    question: "What do you hope to achieve in the future?",
    description: "Talking about future aspirations can lead to inspiring conversations about personal growth and ambition."
  },
  {
    question: "Can you share a special experience or story with us?",
    description: "Sharing unique experiences or stories from life can foster a sense of trust and openness between individuals."
  },
  {
    question: "What is your ideal way to spend a relaxing day off?",
    description: "Discussing preferred ways to unwind and relax can reveal shared interests and ways to de-stress."
  },
  {
    question: "Which season do you love the most, and why?",
    description: "Conversations about favorite seasons can lead to discussions about favorite activities and weather preferences."
  },
  {
    question: "What is your favorite restaurant you've been to recently?",
    description: "Talking about favorite restaurants and dishes can lead to a delightful exchange of culinary experiences."
  },
  {
    question: "Can you tell us about your family?",
    description: "Sharing about family and loved ones can create a sense of closeness and understanding between people."
  }
]

export function icebreakersRandom() {
  const icebreaker = icebreakers[Math.floor(Math.random() * icebreakers.length)]

  return icebreaker
}
