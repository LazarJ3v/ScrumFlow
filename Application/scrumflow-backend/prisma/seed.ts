import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  // ═══════════════════════════════════════════════════════
  // USERS
  // ═══════════════════════════════════════════════════════
  const productOwner = await prisma.user.create({
    data: {
      firstName: 'Nikola',
      lastName: 'Petrovic',
      email: 'nikola.petrovic@scrumflow.com',
      passwordHash: 'hashed_password_1',
      role: 'PRODUCT_OWNER',
    }
  });

  const scrumMaster = await prisma.user.create({
    data: {
      firstName: 'Ana',
      lastName: 'Jovanovic',
      email: 'ana.jovanovic@scrumflow.com',
      passwordHash: 'hashed_password_2',
      role: 'SCRUM_MASTER',
    }
  });

  const developer1 = await prisma.user.create({
    data: {
      firstName: 'Marko',
      lastName: 'Nikolic',
      email: 'marko.nikolic@scrumflow.com',
      passwordHash: 'hashed_password_3',
      role: 'DEVELOPER',
    }
  });

  const developer2 = await prisma.user.create({
    data: {
      firstName: 'Jana',
      lastName: 'Stojanovic',
      email: 'jana.stojanovic@scrumflow.com',
      passwordHash: 'hashed_password_4',
      role: 'DEVELOPER',
    }
  });

  const developer3 = await prisma.user.create({
    data: {
      firstName: 'Stefan',
      lastName: 'Markovic',
      email: 'stefan.markovic@scrumflow.com',
      passwordHash: 'hashed_password_5',
      role: 'DEVELOPER',
    }
  });

  const client = await prisma.user.create({
    data: {
      firstName: 'Petar',
      lastName: 'Lazovic',
      email: 'petar.lazovic@scrumflow.com',
      passwordHash: 'hashed_password_6',
      role: 'CLIENT',
    }
  });

  const admin = await prisma.user.create({
    data: {
      firstName: 'Milan',
      lastName: 'Djordjevic',
      email: 'milan.djordjevic@scrumflow.com',
      passwordHash: 'hashed_password_7',
      role: 'ADMIN',
    }
  });

  // ═══════════════════════════════════════════════════════
  // TASKS
  // ═══════════════════════════════════════════════════════
  await prisma.task.createMany({
    data: [
      {
        title: 'Implementirati JWT autentikaciju',
        description: 'Podesiti JWT token logiku na NestJS backendu sa refresh token rotacijom',
        status: 'IN_PROGRESS',
        priority: 'HIGH',
        storyPoints: 8,
        isBlocked: false,
        commentsCount: 3,
        attachmentsCount: 1,
        dueDate: new Date('2025-02-06T00:00:00.000Z'),
        backlogItemTitle: 'Login i registracija korisnika',
        sprintName: 'Sprint 3',
        assigneeId: developer1.id,
        createdById: scrumMaster.id,
      },
      {
        title: 'Kreirati register stranicu',
        description: 'Angular forma za registraciju sa validacijom',
        status: 'REVIEW',
        priority: 'HIGH',
        storyPoints: 5,
        isBlocked: false,
        commentsCount: 5,
        attachmentsCount: 2,
        dueDate: new Date('2025-02-04T00:00:00.000Z'),
        backlogItemTitle: 'Login i registracija korisnika',
        sprintName: 'Sprint 3',
        assigneeId: developer2.id,
        createdById: scrumMaster.id,
      },
      {
        title: 'Podesiti Docker konfiguraciju za bazu',
        description: 'Docker compose sa PostgreSQL i pgAdmin',
        status: 'DONE',
        priority: 'MEDIUM',
        storyPoints: 3,
        isBlocked: false,
        commentsCount: 1,
        attachmentsCount: 0,
        dueDate: new Date('2025-01-30T00:00:00.000Z'),
        backlogItemTitle: 'Infrastruktura i deployment',
        sprintName: 'Sprint 3',
        assigneeId: developer3.id,
        createdById: scrumMaster.id,
      },
      {
        title: 'Napraviti NestJS module za korisnike',
        description: 'User modul sa CRUD operacijama i permisijama',
        status: 'IN_PROGRESS',
        priority: 'HIGH',
        storyPoints: 5,
        isBlocked: true,
        blockedReason: 'Ceka se finalizacija baze podataka od DevOps tima',
        commentsCount: 7,
        attachmentsCount: 0,
        dueDate: new Date('2025-02-05T00:00:00.000Z'),
        backlogItemTitle: 'Upravljanje korisnicima',
        sprintName: 'Sprint 3',
        assigneeId: developer1.id,
        createdById: scrumMaster.id,
      },
      {
        title: 'Dizajnirati Kanban tablu',
        description: 'Angular komponenta sa 4 kolone i task karticama',
        status: 'DONE',
        priority: 'CRITICAL',
        storyPoints: 8,
        isBlocked: false,
        commentsCount: 4,
        attachmentsCount: 3,
        dueDate: new Date('2025-01-28T00:00:00.000Z'),
        backlogItemTitle: 'Kanban tabla Sprint Board',
        sprintName: 'Sprint 3',
        assigneeId: developer2.id,
        createdById: scrumMaster.id,
      },
      {
        title: 'Implementirati drag and drop za taskove',
        description: 'CDK Drag and Drop sa WebSocket sinhronizacijom',
        status: 'TO_DO',
        priority: 'HIGH',
        storyPoints: 5,
        isBlocked: false,
        commentsCount: 2,
        attachmentsCount: 0,
        dueDate: new Date('2025-02-06T00:00:00.000Z'),
        backlogItemTitle: 'Kanban tabla Sprint Board',
        sprintName: 'Sprint 3',
        assigneeId: null,
        createdById: scrumMaster.id,
      },
      {
        title: 'Kreirati WebSocket gateway za real-time update',
        description: 'NestJS WebSocket gateway sa Socket.io',
        status: 'TO_DO',
        priority: 'CRITICAL',
        storyPoints: 13,
        isBlocked: false,
        commentsCount: 6,
        attachmentsCount: 1,
        dueDate: new Date('2025-02-06T00:00:00.000Z'),
        backlogItemTitle: 'Real-time sinhronizacija',
        sprintName: 'Sprint 3',
        assigneeId: developer3.id,
        createdById: scrumMaster.id,
      },
      {
        title: 'Implementirati NgRx store za taskove',
        description: 'Actions, reducers, effects i selectors za task management',
        status: 'TO_DO',
        priority: 'HIGH',
        storyPoints: 8,
        isBlocked: false,
        commentsCount: 0,
        attachmentsCount: 0,
        dueDate: new Date('2025-02-06T00:00:00.000Z'),
        backlogItemTitle: 'Real-time sinhronizacija',
        sprintName: 'Sprint 3',
        assigneeId: null,
        createdById: scrumMaster.id,
      },
      {
        title: 'Podesiti RxJS stream za notifikacije',
        description: 'merge groupBy i filter operatori za notifikacioni sistem',
        status: 'REVIEW',
        priority: 'MEDIUM',
        storyPoints: 5,
        isBlocked: false,
        commentsCount: 2,
        attachmentsCount: 0,
        dueDate: new Date('2025-02-03T00:00:00.000Z'),
        backlogItemTitle: 'Notifikacioni sistem',
        sprintName: 'Sprint 3',
        assigneeId: developer1.id,
        createdById: scrumMaster.id,
      },
      {
        title: 'Implementirati Burndown Chart',
        description: 'Live grafikon sa RxJS combineLatest i scan operatorima',
        status: 'TO_DO',
        priority: 'HIGH',
        storyPoints: 8,
        isBlocked: true,
        blockedReason: 'Ceka se zavrsetak WebSocket gateway-a',
        commentsCount: 3,
        attachmentsCount: 1,
        dueDate: new Date('2025-02-06T00:00:00.000Z'),
        backlogItemTitle: 'Sprint Burndown Chart',
        sprintName: 'Sprint 3',
        assigneeId: developer2.id,
        createdById: scrumMaster.id,
      },
    ]
  });

  console.log('Seed uspesno zavrsen!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());