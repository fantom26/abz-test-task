import { DeepPartial, ITranslation } from "utils/declarations";

export const en: DeepPartial<ITranslation> = {
  pages: {
    home: {
      hero: {
        title: "Test assignment for front-end developer",
        description:
          "What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."
      },
      get: {
        title: "Working with GET request"
      },
      post: {
        title: "Working with POST request",
        titleSuccess: "User successfully registered"
      }
    }
  },
  navigation: {
    users: "Users",
    signUp: "Sign up"
  },
  btn: {
    showMore: "Show more"
  },
  alts: {
    hero: "Landscape",
    goToMain: "Go to main page"
  },
  forms: {
    name: {
      placeholder: "Your name"
    },
    email: {
      placeholder: "Email"
    },
    phone: {
      placeholder: "Phone"
    },
    upload: {
      placeholder: "Upload your photo"
    }
  },
  notifications: {
    smthWentWrong: "Something went wrong!"
  }
};
