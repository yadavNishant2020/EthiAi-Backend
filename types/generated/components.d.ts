import type { Struct, Schema } from '@strapi/strapi';

export interface QuizQuestionQuizQuestion extends Struct.ComponentSchema {
  collectionName: 'components_quiz_questions';
  info: {
    name: 'Quiz Question';
    icon: 'question';
    description: 'A component to create different types of quiz questions';
  };
  options: {
    timestamps: false;
    draftAndPublish: false;
  };
  attributes: {
    question_text: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['radio', 'checkbox', 'text', 'descriptive']
    > &
      Schema.Attribute.Required;
    options: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    risk_score: Schema.Attribute.Integer;
    gaps: Schema.Attribute.Text;
    recommendations: Schema.Attribute.Text;
    answers_required: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'quiz-question.quiz-question': QuizQuestionQuizQuestion;
    }
  }
}
