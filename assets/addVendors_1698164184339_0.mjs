/** @format */

import { randomUUID } from "node:crypto";
import { hashSync } from "@node-rs/argon2";
import { PrismaClient } from "@prisma/client";

/** @typedef {object} VendorData
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {boolean} showPaymentStatus
 * @property {boolean} showLegalForms
 */

/** @type {Array<VendorData>} */
const vendors = [
  {
    name: "Shady Supplier",
    email: "shady@supplier.test",
    password: "sneakygoesbrrr",
    showLegalForms: false,
    externalId: 2648,
    showPaymentStatus: false,
    editGLCodes: false,
    properties: [],
    glCodes: [],
  },
  {
    name: "Trusted Supplier",
    email: "trusted@supplier.test",
    password: "honorablepassword",
    showLegalForms: true,
    showPaymentStatus: true,
    externalId: 3362,
    editGLCodes: false,
    properties: [],
    glCodes: [],
  },
];

/**
 * @param {[VendorData]} vendorData
 */
const createVendors = async (vendorData) => {
  const client = new PrismaClient();

  const vendorDataProc = vendorData.map((vd) => ({
    ...vd,
    password: hashSync(vd.password),
    authUserId: randomUUID(),
  }));

  const auData = vendorDataProc.map((v) => ({
    name: v.name,
    password: v.password,
    email: v.email,
    Id: v.authUserId,
    role: "vendor",
  }));

  const venData = vendorDataProc.map((v) => ({
    showLegalForms: v.showLegalForms,
    showPaymentStatus: v.showPaymentStatus,
    authUserId: v.authUserId,
    externalId: v.externalId,
    properties: [],
    glCodes: [],
    editGLCodes: true,
  }));

  const [{ count: auCount }, { count: vendorCount }] =
    await client.$transaction([
      client.authUser.createMany({ data: auData }),
      client.vendor.createMany({ data: venData }),
    ]);
  console.log(
    `Created ${auCount} auth users and ${vendorCount} related vendors`
  );
};

createVendors(vendors);
