erDiagram
    QuizMaker ||--o| Subscription : "has"
    QuizMaker ||--|{ Quiz : "creates"
    Quiz ||--|{ Question : "contains"
    Question ||--|{ Answer : "has"
    Question ||--o{ AnswerCombination : "may have"

    QuizMaker {
        string UID PK
        string UserName
        string Email
        string Password
        string FirstName
        string LastName
        date DateOfBirth
        string Gender
        string Photo
    }

    Subscription {
        int SubscriptionID PK
        string Tier
        int NumberOfUsers
        int NumberOfQuizzes
        string AssessmentQuizzes
        string ComplianceRiskScoring
        string DetailedReporting
        string CustomRecommendations
        string ComplianceDashboard
        string RegulatoryUpdates
        string PrioritySupport
        string OnboardingAssistance
        string ComplianceCertification
        string Consultation
    }

    Quiz {
        int QuizID PK
        int QuizMakerID FK
        string QuizType
    }

    Question {
        int QuestionID PK
        int QuizID FK
        string QuestionType
        string ComplianceRequirement
        string RiskLevel
        string QuestionName
        float Penalty
    }

    Answer {
        int AnswerID PK
        int QuestionID FK
        string AnswerText
        float RiskScore
        string Gap
        string Recommendation
        float LowestRiskScore
        float HighestRiskScore
        string IsCorrect
    }

    AnswerCombination {
        int CombinationID PK
        int QuestionID FK
        string Combination
        float RiskScore
        string Gap
        string Recommendation
        float LowestRiskScore
        float HighestRiskScore
        string IsCorrect
    }
