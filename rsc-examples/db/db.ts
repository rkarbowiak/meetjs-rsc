import { faker } from "@faker-js/faker";

export interface User {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
}

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUsers = async () => {
  await sleep(1000);
  return USERS;
};

export const addUser = async (user: Partial<User>) => {
  await sleep(1000);
  return USERS.push({
    ...createRandomUser(),
    ...user,
  });
};

export const removeUser = async (userId: string) => {
  await sleep(1000);
  return USERS.filter((user) => user.userId !== userId);
};

export const getContent = async () => {
  await sleep(2000);

  return new Array(2).fill(null).map(() => {
    return {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      image: faker.image.urlPicsumPhotos(),
      alt: faker.lorem.sentence(),
    };
  });
};

export const getRecommendations = async () => {
  await sleep(5000);

  return new Array(5).fill(null).map(() => {
    return {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      image: faker.image.urlPicsumPhotos(),
      alt: faker.lorem.sentence(),
    };
  });
};
