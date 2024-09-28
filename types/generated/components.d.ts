import type { Struct, Schema } from '@strapi/strapi';

export interface QuizQuiz extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quizzes';
  info: {
    displayName: 'quiz';
  };
  attributes: {
    Question: Schema.Attribute.String & Schema.Attribute.Required;
    answerChoices: Schema.Attribute.JSON;
    correctAnswer: Schema.Attribute.String;
    questionType: Schema.Attribute.Enumeration<
      ['multiple-choice', 'true-false', 'short-answer']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'quiz.quiz': QuizQuiz;
    }
  }
}
