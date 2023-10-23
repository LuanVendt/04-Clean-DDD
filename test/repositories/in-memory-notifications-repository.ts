import { Notification } from "@/domain/notification/application/enterprise/entities/notification"
import { NotificationsRepository } from "@/domain/notification/application/repositories/notifications-repository"


export class InMemoryNotificationsRepository implements NotificationsRepository {
    public items: Notification[] = []

    async create(notification: Notification) {
        this.items.push(notification)
    }

    async save(notification: Notification): Promise<void> {
        const itemIndex = this.items.findIndex(item => item.id === notification.id)

        this.items[itemIndex] = notification
    }

    async findById(id: string) {
        const notification = await this.items.find(item => item.id.toString() === id)

        if (!notification) {
            return null
        }

        return notification
    }

}