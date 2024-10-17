import { Schema, model, Document, Types, models } from "mongoose";

// Enums
enum Role {
  AGENCY_OWNER = "AGENCY_OWNER",
  AGENCY_ADMIN = "AGENCY_ADMIN",
  SUBACCOUNT_USER = "SUBACCOUNT_USER",
  SUBACCOUNT_GUEST = "SUBACCOUNT_GUEST",
}

enum Icon {
  settings = "settings",
  chart = "chart",
  calendar = "calendar",
  check = "check",
  chip = "chip",
  compass = "compass",
  database = "database",
  flag = "flag",
  home = "home",
  info = "info",
  link = "link",
  lock = "lock",
  messages = "messages",
  notification = "notification",
  payment = "payment",
  power = "power",
  receipt = "receipt",
  shield = "shield",
  star = "star",
  tune = "tune",
  videorecorder = "videorecorder",
  wallet = "wallet",
  warning = "warning",
  headphone = "headphone",
  send = "send",
  pipelines = "pipelines",
  person = "person",
  category = "category",
  contact = "contact",
  clipboardIcon = "clipboardIcon",
}

enum TriggerTypes {
  CONTACT_FORM = "CONTACT_FORM",
}

enum ActionType {
  CREATE_CONTACT = "CREATE_CONTACT",
}

enum InvitationStatus {
  ACCEPTED = "ACCEPTED",
  REVOKED = "REVOKED",
  PENDING = "PENDING",
}

// enum Plan {
//   price_1OYxkqFj9oKEERu1NbKUxXxN = "price_1OYxkqFj9oKEERu1NbKUxXxN",
//   price_1OYxkqFj9oKEERu1KfJGWxgN = "price_1OYxkqFj9oKEERu1KfJGWxgN",
// }

// Interfaces
interface IUser extends Document {
  username: string;
  image: string;
  email: string;
  googleId: string;
  role: Role;
  agencyId?: Types.ObjectId;
  createdAt: Date;
}

interface IAgency extends Document {
  name: string;
  agencyLogo: string;
  companyEmail: string;
  companyPhone: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  goal: number;
  whiteLabel: boolean;
  users: Types.ObjectId[];
}

interface IPermissions extends Document {
  email: string;
  subAccountId: Types.ObjectId;
  access: boolean;
}

interface ISubAccount extends Document {
  name: string;
  subAccountLogo: string;
  companyEmail: string;
  companyPhone: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  agencyId: Types.ObjectId;
}

interface ITag extends Document {
  name: string;
  color: string;
  subAccountId: Types.ObjectId;
}

interface IPipeline extends Document {
  name: string;
  subAccountId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

interface ILane extends Document {
  name: string;
  pipelineId: Types.ObjectId;
  order: number;
}

interface ITicket extends Document {
  name: string;
  laneId: Types.ObjectId;
  order: number;
  value?: number;
  description?: string;
}

interface ITrigger extends Document {
  name: string;
  type: TriggerTypes;
  subAccountId: Types.ObjectId;
}

interface IAutomation extends Document {
  name: string;
  triggerId?: Types.ObjectId;
  published: boolean;
  subAccountId: Types.ObjectId;
}

interface IAction extends Document {
  name: string;
  type: ActionType;
  automationId: Types.ObjectId;
  laneId: string;
}

interface IContact extends Document {
  name: string;
  email: string;
  subAccountId: Types.ObjectId;
}

interface IMedia extends Document {
  name: string;
  email: string;
  link: string;
  createdAt: Date;
  subAccountId: Types.ObjectId;
}

interface IFunnel extends Document {
  name: string;
  subAccountId: Types.ObjectId;
}

interface IFunnelPage extends Document {
  name: string;
  funnelId: Types.ObjectId;
}

interface IAgencySidebarOption extends Document {
  name: string;
  link: string;
  icon: Icon;
  agencyId: Types.ObjectId;
}

interface ISubAccountSidebarOption extends Document {
  name: string;
  link: string;
  icon: Icon;
  subAccountId: Types.ObjectId;
}

interface IInvitation extends Document {
  email: string;
  agencyId: Types.ObjectId;
  status: InvitationStatus;
  role: Role;
}

interface INotification extends Document {
  notification: string;
  agencyId: Types.ObjectId;
  subAccountId?: Types.ObjectId;
  userId: Types.ObjectId;
}

// Schemas
const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  image: { type: String },
  email: { type: String, required: true, unique: true },
  googleId: { type: String },
  role: { type: String, enum: Role, default: Role.SUBACCOUNT_USER },
  agencyId: { type: Types.ObjectId, ref: "Agency" },
  createdAt: { type: Date, default: Date.now },
});

const agencySchema = new Schema<IAgency>({
  name: { type: String, required: true },
  agencyLogo: { type: String, required: true },
  companyEmail: { type: String, required: true },
  companyPhone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  goal: { type: Number, default: 5 },
  whiteLabel: { type: Boolean, default: true },
  users: [{ type: Types.ObjectId, ref: "User" }],
});

const permissionsSchema = new Schema<IPermissions>({
  email: { type: String, required: true },
  subAccountId: { type: Schema.Types.ObjectId, ref: "SubAccount", required: true },
  access: { type: Boolean, required: true },
});

const subAccountSchema = new Schema<ISubAccount>({
  name: { type: String, required: true },
  subAccountLogo: { type: String, required: true },
  companyEmail: { type: String, required: true },
  companyPhone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  agencyId: { type: Schema.Types.ObjectId, ref: "Agency", required: true },
});

const tagSchema = new Schema<ITag>({
  name: { type: String, required: true },
  color: { type: String, required: true },
  subAccountId: { type: Schema.Types.ObjectId, ref: "SubAccount", required: true },
});

const pipelineSchema = new Schema<IPipeline>({
  name: { type: String, required: true },
  subAccountId: { type: Schema.Types.ObjectId, ref: "SubAccount", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const laneSchema = new Schema<ILane>({
  name: { type: String, required: true },
  pipelineId: { type: Schema.Types.ObjectId, ref: "Pipeline", required: true },
  order: { type: Number, default: 0 },
});

const ticketSchema = new Schema<ITicket>({
  name: { type: String, required: true },
  laneId: { type: Schema.Types.ObjectId, ref: "Lane", required: true },
  order: { type: Number, default: 0 },
  value: { type: Number },
  description: { type: String },
});

const triggerSchema = new Schema<ITrigger>({
  name: { type: String, required: true },
  type: { type: String, enum: TriggerTypes, required: true },
  subAccountId: { type: Schema.Types.ObjectId, ref: "SubAccount", required: true },
});

const automationSchema = new Schema<IAutomation>({
  name: { type: String, required: true },
  triggerId: { type: Types.ObjectId, ref: "Trigger" },
  published: { type: Boolean, default: false },
  subAccountId: { type: Schema.Types.ObjectId, ref: "SubAccount", required: true },
});

const actionSchema = new Schema<IAction>({
  name: { type: String, required: true },
  type: { type: String, enum: ActionType, required: true },
  automationId: { type: Schema.Types.ObjectId, ref: "Automation", required: true },
  laneId: { type: String, default: "0" },
});

const contactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subAccountId: { type: Schema.Types.ObjectId, ref: "SubAccount", required: true },
});

const mediaSchema = new Schema<IMedia>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  link: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  subAccountId: { type: Schema.Types.ObjectId, ref: "SubAccount", required: true },
});

const funnelSchema = new Schema<IFunnel>({
  name: { type: String, required: true },
  subAccountId: { type: Schema.Types.ObjectId, ref: "SubAccount", required: true },
});

const funnelPageSchema = new Schema<IFunnelPage>({
  name: { type: String, required: true },
  funnelId: { type: Schema.Types.ObjectId, ref: "Funnel", required: true },
});

const agencySidebarOptionSchema = new Schema<IAgencySidebarOption>({
  name: { type: String, required: true },
  link: { type: String, required: true },
  icon: { type: String, enum: Icon, required: true },
  agencyId: { type: Schema.Types.ObjectId, ref: "Agency", required: true },
});

const subAccountSidebarOptionSchema = new Schema<ISubAccountSidebarOption>({
  name: { type: String, required: true },
  link: { type: String, required: true },
  icon: { type: String, enum: Icon, required: true },
  subAccountId: { type: Schema.Types.ObjectId, ref: "SubAccount", required: true },
});

const invitationSchema = new Schema<IInvitation>({
  email: { type: String, required: true },
  agencyId: { type: Schema.Types.ObjectId, ref: "Agency", required: true },
  status: { type: String, enum: InvitationStatus, default: InvitationStatus.PENDING },
  role: { type: String, enum: Role, required: true },
});

const notificationSchema = new Schema<INotification>({
  notification: { type: String, required: true },
  agencyId: { type: Schema.Types.ObjectId, ref: "Agency", required: true },
  subAccountId: { type: Types.ObjectId, ref: "SubAccount" },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// Export models
export const User = models?.User || model<IUser>("User", userSchema);
export const Agency = models.Agency || model<IAgency>("Agency", agencySchema);
export const Permissions = models.Permissions || model<IPermissions>("Permissions", permissionsSchema);
export const SubAccount = models.SubAccount || model<ISubAccount>("SubAccount", subAccountSchema);
export const Tag = models.Tag || model<ITag>("Tag", tagSchema);
export const Pipeline = models.Pipeline || model<IPipeline>("Pipeline", pipelineSchema);
export const Lane = models.Lane || model<ILane>("Lane", laneSchema);
export const Ticket = models.Ticket || model<ITicket>("Ticket", ticketSchema);
export const Trigger = models.Trigger || model<ITrigger>("Trigger", triggerSchema);
export const Automation = models.Automation || model<IAutomation>("Automation", automationSchema);
export const Action = models.Action || model<IAction>("Action", actionSchema);
export const Contact = models.Contact || model<IContact>("Contact", contactSchema);
export const Media = models.Media || model<IMedia>("Media", mediaSchema);
export const Funnel = models.Funnel || model<IFunnel>("Funnel", funnelSchema);
export const FunnelPage = models.FunnelPage || model<IFunnelPage>("FunnelPage", funnelPageSchema);
export const AgencySidebarOption = models.AgencySidebarOption || model<IAgencySidebarOption>("AgencySidebarOption", agencySidebarOptionSchema);
export const SubAccountSidebarOption = models.SubAccountSidebarOption || model<ISubAccountSidebarOption>("SubAccountSidebarOption", subAccountSidebarOptionSchema);
export const Invitation = models.Invitation || model<IInvitation>("Invitation", invitationSchema);
export const Notification = models.Notification || model<INotification>("Notification", notificationSchema);
