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
  // PROJECT
  // ═══════════════════════════════════════════════════════
  const project = await prisma.project.create({
    data: {
      name: 'ScrumFlow Platform',
      description: 'Platforma za upravljanje projektima po Scrum metodologiji',
      status: 'ACTIVE',
      productOwnerId: productOwner.id,
    }
  });

  // ═══════════════════════════════════════════════════════
  // TEAM MEMBERS
  // ═══════════════════════════════════════════════════════
  await prisma.teamMember.createMany({
    data: [
      { projectId: project.id, userId: productOwner.id },
      { projectId: project.id, userId: scrumMaster.id },
      { projectId: project.id, userId: developer1.id },
      { projectId: project.id, userId: developer2.id },
      { projectId: project.id, userId: developer3.id },
      { projectId: project.id, userId: client.id },
    ]
  });

  // ═══════════════════════════════════════════════════════
  // BACKLOG ITEMS
  // ═══════════════════════════════════════════════════════
  const backlogItem1 = await prisma.backlogItem.create({
    data: {
      title: 'Login i registracija korisnika',
      description: 'Implementirati auth sistem sa JWT tokenima',
      acceptanceCriteria: 'Korisnik moze da se registruje i uloguje',
      storyPoints: 8,
      priority: 'HIGH',
      status: 'IN_SPRINT',
      projectId: project.id,
      createdById: productOwner.id,
    }
  });

  const backlogItem2 = await prisma.backlogItem.create({
    data: {
      title: 'Kanban tabla — Sprint Board',
      description: 'Real-time Kanban tabla sa drag & drop funkcionalsnocu',
      acceptanceCriteria: 'Taskovi se mogu prevlaciti izmedju kolona u realnom vremenu',
      storyPoints: 13,
      priority: 'CRITICAL',
      status: 'IN_SPRINT',
      projectId: project.id,
      createdById: productOwner.id,
    }
  });

  const backlogItem3 = await prisma.backlogItem.create({
    data: {
      title: 'Notifikacioni sistem',
      description: 'RxJS stream notifikacija po ulogama korisnika',
      acceptanceCriteria: 'Svaki korisnik dobija notifikacije relevantne za svoju ulogu',
      storyPoints: 5,
      priority: 'MEDIUM',
      status: 'IN_SPRINT',
      projectId: project.id,
      createdById: productOwner.id,
    }
  });

  const backlogItem4 = await prisma.backlogItem.create({
    data: {
      title: 'Upravljanje korisnicima',
      description: 'Admin panel za upravljanje korisnicima i ulogama',
      acceptanceCriteria: 'Admin moze kreirati, editovati i deaktivirati korisnike',
      storyPoints: 5,
      priority: 'MEDIUM',
      status: 'READY',
      projectId: project.id,
      createdById: productOwner.id,
    }
  });

  const backlogItem5 = await prisma.backlogItem.create({
    data: {
      title: 'Burndown Chart',
      description: 'Live grafikon napretka sprinta',
      acceptanceCriteria: 'Graf se azurira u realnom vremenu kada se taskovi zavrse',
      storyPoints: 8,
      priority: 'HIGH',
      status: 'READY',
      projectId: project.id,
      createdById: productOwner.id,
    }
  });

  const backlogItem6 = await prisma.backlogItem.create({
    data: {
      title: 'Infrastruktura i deployment',
      description: 'Docker konfiguracija i CI/CD pipeline',
      acceptanceCriteria: 'Aplikacija se pokrace u Docker kontejneru',
      storyPoints: 3,
      priority: 'LOW',
      status: 'DRAFT',
      projectId: project.id,
      createdById: productOwner.id,
    }
  });

  // ═══════════════════════════════════════════════════════
  // SPRINT
  // ═══════════════════════════════════════════════════════
  const sprint = await prisma.sprint.create({
    data: {
      name: 'Sprint 3',
      goal: 'Implementacija auth modula i Kanban table',
      startDate: new Date('2025-01-23'),
      endDate: new Date('2025-02-06'),
      status: 'ACTIVE',
      projectId: project.id,
      scrumMasterId: scrumMaster.id,
    }
  });

  // ═══════════════════════════════════════════════════════
  // TASKS
  // ═══════════════════════════════════════════════════════
  const task1 = await prisma.task.create({
    data: {
      title: 'Implementirati JWT autentikaciju',
      description: 'Podesiti JWT token logiku na NestJS backendu sa refresh token rotacijom',
      status: 'IN_PROGRESS',
      priority: 'HIGH',
      storyPoints: 8,
      isBlocked: false,
      commentsCount: 3,
      attachmentsCount: 1,
      dueDate: new Date('2025-02-06'),
      assigneeId: developer1.id,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem1.id,
      sprintId: sprint.id,
    }
  });

  const task2 = await prisma.task.create({
    data: {
      title: 'Kreirati register stranicu',
      description: 'Angular forma za registraciju sa validacijom',
      status: 'REVIEW',
      priority: 'HIGH',
      storyPoints: 5,
      isBlocked: false,
      commentsCount: 5,
      attachmentsCount: 2,
      dueDate: new Date('2025-02-04'),
      assigneeId: developer2.id,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem1.id,
      sprintId: sprint.id,
    }
  });

  const task3 = await prisma.task.create({
    data: {
      title: 'Podesiti Docker konfiguraciju za bazu',
      description: 'Docker compose sa PostgreSQL i pgAdmin',
      status: 'DONE',
      priority: 'MEDIUM',
      storyPoints: 3,
      isBlocked: false,
      commentsCount: 1,
      attachmentsCount: 0,
      dueDate: new Date('2025-01-30'),
      assigneeId: developer3.id,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem6.id,
      sprintId: sprint.id,
    }
  });

  const task4 = await prisma.task.create({
    data: {
      title: 'Napraviti NestJS module za korisnike',
      description: 'User modul sa CRUD operacijama i permisijama',
      status: 'IN_PROGRESS',
      priority: 'HIGH',
      storyPoints: 5,
      isBlocked: true,
      blockedReason: 'Ceka se finalizacija baze podataka od DevOps tima',
      commentsCount: 7,
      attachmentsCount: 0,
      dueDate: new Date('2025-02-05'),
      assigneeId: developer1.id,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem4.id,
      sprintId: sprint.id,
    }
  });

  const task5 = await prisma.task.create({
    data: {
      title: 'Dizajnirati Kanban tablu',
      description: 'Angular komponenta sa 4 kolone i task karticama',
      status: 'DONE',
      priority: 'CRITICAL',
      storyPoints: 8,
      isBlocked: false,
      commentsCount: 4,
      attachmentsCount: 3,
      dueDate: new Date('2025-01-28'),
      assigneeId: developer2.id,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem2.id,
      sprintId: sprint.id,
    }
  });

  const task6 = await prisma.task.create({
    data: {
      title: 'Implementirati drag & drop za taskove',
      description: 'CDK Drag & Drop sa WebSocket sinhronizacijom',
      status: 'TO_DO',
      priority: 'HIGH',
      storyPoints: 5,
      isBlocked: false,
      commentsCount: 2,
      attachmentsCount: 0,
      dueDate: new Date('2025-02-06'),
      assigneeId: null,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem2.id,
      sprintId: sprint.id,
    }
  });

  const task7 = await prisma.task.create({
    data: {
      title: 'Kreirati WebSocket gateway za real-time update',
      description: 'NestJS WebSocket gateway sa Socket.io',
      status: 'TO_DO',
      priority: 'CRITICAL',
      storyPoints: 13,
      isBlocked: false,
      commentsCount: 6,
      attachmentsCount: 1,
      dueDate: new Date('2025-02-06'),
      assigneeId: developer3.id,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem2.id,
      sprintId: sprint.id,
    }
  });

  const task8 = await prisma.task.create({
    data: {
      title: 'Implementirati NgRx store za taskove',
      description: 'Actions, reducers, effects i selectors za task management',
      status: 'TO_DO',
      priority: 'HIGH',
      storyPoints: 8,
      isBlocked: false,
      commentsCount: 0,
      attachmentsCount: 0,
      dueDate: new Date('2025-02-06'),
      assigneeId: null,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem2.id,
      sprintId: sprint.id,
    }
  });

  const task9 = await prisma.task.create({
    data: {
      title: 'Podesiti RxJS stream za notifikacije',
      description: 'merge(), groupBy() i filter() operatori za notifikacioni sistem',
      status: 'REVIEW',
      priority: 'MEDIUM',
      storyPoints: 5,
      isBlocked: false,
      commentsCount: 2,
      attachmentsCount: 0,
      dueDate: new Date('2025-02-03'),
      assigneeId: developer1.id,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem3.id,
      sprintId: sprint.id,
    }
  });

  const task10 = await prisma.task.create({
    data: {
      title: 'Implementirati Burndown Chart',
      description: 'Live grafikon sa RxJS combineLatest i scan operatorima',
      status: 'TO_DO',
      priority: 'HIGH',
      storyPoints: 8,
      isBlocked: true,
      blockedReason: 'Ceka se zavrsetak WebSocket gateway-a',
      commentsCount: 3,
      attachmentsCount: 1,
      dueDate: new Date('2025-02-06'),
      assigneeId: developer2.id,
      createdById: scrumMaster.id,
      backlogItemId: backlogItem5.id,
      sprintId: sprint.id,
    }
  });

  // ═══════════════════════════════════════════════════════
  // SUBTASKS
  // ═══════════════════════════════════════════════════════
  await prisma.subtask.createMany({
    data: [
      { title: 'Instalirati passport.js', isCompleted: true,  taskId: task1.id },
      { title: 'Kreirati JWT strategy',   isCompleted: true,  taskId: task1.id },
      { title: 'Refresh token endpoint',  isCompleted: false, taskId: task1.id },
      { title: 'Napisati testove',        isCompleted: false, taskId: task1.id },

      { title: 'Kreirati Angular formu',  isCompleted: true,  taskId: task2.id },
      { title: 'Dodati validaciju',       isCompleted: true,  taskId: task2.id },
      { title: 'Povezati sa API-jem',     isCompleted: true,  taskId: task2.id },

      { title: 'Kreirati docker-compose', isCompleted: true,  taskId: task3.id },
      { title: 'Podesiti pgAdmin',        isCompleted: true,  taskId: task3.id },

      { title: 'Kreirati NgRx actions',   isCompleted: false, taskId: task8.id },
      { title: 'Kreirati reducer',        isCompleted: false, taskId: task8.id },
      { title: 'Kreirati effects',        isCompleted: false, taskId: task8.id },
      { title: 'Kreirati selectors',      isCompleted: false, taskId: task8.id },
    ]
  });

  // ═══════════════════════════════════════════════════════
  // COMMENTS
  // ═══════════════════════════════════════════════════════
  await prisma.comment.createMany({
    data: [
      { content: 'Zavrsio sam passport strategiju, radim na refresh tokenu',  taskId: task1.id, authorId: developer1.id },
      { content: 'Treba da dodamo i blacklist za invalidisane tokene',         taskId: task1.id, authorId: scrumMaster.id },
      { content: 'Dobar predlog, dodajem u subtaskove',                        taskId: task1.id, authorId: developer1.id },

      { content: 'Forma je gotova, saljem na review',                         taskId: task2.id, authorId: developer2.id },
      { content: 'Proveri validaciju za email format',                         taskId: task2.id, authorId: scrumMaster.id },
    ]
  });

  // ═══════════════════════════════════════════════════════
  // STANDUP SESSION
  // ═══════════════════════════════════════════════════════
  const standupSession = await prisma.standupSession.create({
    data: {
      date: new Date('2025-01-27'),
      sprintId: sprint.id,
      createdById: scrumMaster.id,
    }
  });

  await prisma.standupEntry.createMany({
    data: [
      { durationSeconds: 95,  wasInterrupted: false, standupSessionId: standupSession.id, userId: developer1.id },
      { durationSeconds: 120, wasInterrupted: true,  standupSessionId: standupSession.id, userId: developer2.id },
      { durationSeconds: 80,  wasInterrupted: false, standupSessionId: standupSession.id, userId: developer3.id },
    ]
  });

  // ═══════════════════════════════════════════════════════
  // PLANNING POKER
  // ═══════════════════════════════════════════════════════
  const pokerSession = await prisma.planningPokerSession.create({
    data: {
      status: 'CONSENSUS',
      finalPoints: 8,
      sprintId: sprint.id,
      backlogItemId: backlogItem5.id,
    }
  });

  await prisma.planningPokerVote.createMany({
    data: [
      { storyPoints: 8,  sessionId: pokerSession.id, userId: developer1.id },
      { storyPoints: 8,  sessionId: pokerSession.id, userId: developer2.id },
      { storyPoints: 13, sessionId: pokerSession.id, userId: developer3.id },
    ]
  });

  // ═══════════════════════════════════════════════════════
  // NOTIFICATIONS
  // ═══════════════════════════════════════════════════════
  await prisma.notification.createMany({
    data: [
      { type: 'TASK_BLOCKED',    message: 'Task "NestJS module za korisnike" je blokiran', status: 'UNREAD', userId: scrumMaster.id },
      { type: 'TASK_DONE',       message: 'Task "Docker konfiguracija" je zavrsen',         status: 'READ',   userId: productOwner.id },
      { type: 'SPRINT_ENDING',   message: 'Sprint 3 istice za 10 dana',                     status: 'UNREAD', userId: productOwner.id },
      { type: 'TASK_ASSIGNED',   message: 'Dodeljen ti je task "JWT autentikacija"',         status: 'READ',   userId: developer1.id },
      { type: 'REVIEW_READY',    message: 'Task "Register stranica" ceka review',            status: 'UNREAD', userId: scrumMaster.id },
      { type: 'SPRINT_ENDING',   message: 'Sprint 3 istice za 10 dana',                     status: 'UNREAD', userId: client.id },
    ]
  });

  console.log('Seed uspesno zavrsen!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());