import { hash } from '@node-rs/argon2';
import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'node:crypto';

//#region UserData - Update these
const EMAIL = 'some@email.test';
const PASS = 'paperhorsebatteryspaceship';
const NAME = 'Abc jr. jr.';

/** @type {'user' | 'admin'} */
const ROLE = 'admin';
//#endregion

/**
 * @param {object} data
 * @param {'user' | 'admin'} data.role
 * @param {string} data.email
 * @param {string} data.password
 * @param {string} data.name
 * */
const createDomainUser = async ({ role, name, password, email }) => {
  const client = new PrismaClient();
  const passHashed = await hash(password);
  const auId = randomUUID();

  const [au, du] = await client.$transaction([
    client.authUser.create({
      data: { name, email, role, password: passHashed, Id: auId },
    }),
    client.domainUser.create({ data: { authUserId: auId } }),
  ]);

  console.log(`Create <${au.role}>:`, du);
};

createDomainUser({
  name: NAME,
  password: PASS,
  email: EMAIL,
  role: ROLE,
});
