import {beforeAll, describe, expect, it} from "vitest";
import {InMemoryEventBus} from "./InMemoryEventBus";
import {DomainEventBus} from "../../../../src/shared/domain/events/DomainEventBus";
import {EntityFakeCreated} from "./EntityFakeCreated";
import {LogOnEntityFakeCreated} from "../entities/LogOnEntityFakeCreated";
import {EntityFake} from "../entities/EntityFake";

describe("EventBus", () => {
    let eventBus: DomainEventBus;

    beforeAll(() => {
        eventBus = new InMemoryEventBus();
        eventBus.addSubscriber(new LogOnEntityFakeCreated())
    })

    it("should listen an event", () => {
        const event = EntityFakeCreated.makeFake();
        eventBus.publish(event);

        expect(event.isPublished).toBe(true);
    });

    it("should listen an entity event", () => {
        const entity = EntityFake.createFake();
        eventBus.publishEvents([entity]);
        expect(entity.getDomainEvents().length).toBe(0);
    });
});