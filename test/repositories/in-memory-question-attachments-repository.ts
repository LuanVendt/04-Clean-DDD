

import { QuestionAttachmentRepository } from "@/domain/forum/application/repositories/question-attachments-repositoty";
import { QuestionAttachment } from "@/domain/forum/enterprise/entities/question-attachment";


export class InMemoryQuestionAttachmentRepository
    implements QuestionAttachmentRepository {

    public items: QuestionAttachment[] = []


    async findManyByQuestionId(questionId: string) {
        const questionAttachment = this.items
            .filter(item => item.questionId.toString() == questionId)
        return questionAttachment
    }
}