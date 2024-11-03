import { Document } from "mongoose";
import { Types } from "mongoose";
import { z } from "zod";

export enum Role {
  AGENCY_OWNER = "AGENCY_OWNER",
  AGENCY_ADMIN = "AGENCY_ADMIN",
  SUBACCOUNT_USER = "SUBACCOUNT_USER",
  SUBACCOUNT_GUEST = "SUBACCOUNT_GUEST",
}

export enum Icon {
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

export enum TriggerTypes {
  CONTACT_FORM = "CONTACT_FORM",
}

export enum ActionType {
  CREATE_CONTACT = "CREATE_CONTACT",
}

export enum InvitationStatus {
  ACCEPTED = "ACCEPTED",
  REVOKED = "REVOKED",
  PENDING = "PENDING",
}

export interface IUser extends Document {
  username: string;
  image: string;
  email: string;
  googleId?: string;
  role: Role;
  agencyId?: Types.ObjectId;
  permissions?: Types.ObjectId[];
  ticket?: Types.ObjectId[];
  notification?: Types.ObjectId[];
  createdAt: Date;
}

export interface SidebarOption {
  name: string;
  link: string;
  icon: Icon;
}

export interface IAgency extends Document {
  name: string;
  agencyLogo: string;
  companyEmail: string;
  companyPhone: string;
  whiteLabel: boolean;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  goal: number;
  users: Types.ObjectId[];
  subAccountsId: Types.ObjectId[];
  sidebarOptions: SidebarOption[];
  invitations: Types.ObjectId[];
  notifications: Types.ObjectId[];
  subscription: Types.ObjectId[];
  addOns: Types.ObjectId[];
  createdAt: Date;
}

export interface IPermissions extends Document {
  email: string;
  subAccountId: Types.ObjectId;
  access: boolean;
}

export interface ISubAccount extends Document {
  name: string;
  subAccountLogo: string;
  companyEmail: string;
  companyPhone: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  createdAt: Date;
  agencyId: Types.ObjectId;
  goal: number;
  sidebarOptions: SidebarOption[]; // Array of SidebarOption objects
  permissions: Types.ObjectId[]; // References to Permissions
  funnels: Types.ObjectId[]; // References to Funnel
  media: Types.ObjectId[]; // References to Media
  contact: Types.ObjectId[]; // References to Contact
  trigger: Types.ObjectId[]; // References to Trigger
  automation: Types.ObjectId[]; // References to Automation
  pipeline: Types.ObjectId[]; // References to Pipeline
  tags: Types.ObjectId[]; // References to Tag
  notification: Types.ObjectId[]; // References to Notification
}

export interface ITag extends Document {
  name: string;
  color: string;
  subAccountId: Types.ObjectId;
}

export interface IPipeline extends Document {
  name: string;
  subAccountId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILane extends Document {
  name: string;
  pipelineId: Types.ObjectId;
  order: number;
}

export interface ITicket extends Document {
  name: string;
  laneId: Types.ObjectId;
  order: number;
  value?: number;
  description?: string;
}

export interface ITrigger extends Document {
  name: string;
  type: TriggerTypes;
  subAccountId: Types.ObjectId;
}

export interface IAutomation extends Document {
  name: string;
  triggerId?: Types.ObjectId;
  published: boolean;
  subAccountId: Types.ObjectId;
}

export interface IAction extends Document {
  name: string;
  type: ActionType;
  automationId: Types.ObjectId;
  laneId: string;
}

export interface IContact extends Document {
  name: string;
  email: string;
  subAccountId: Types.ObjectId;
}

export interface IMedia extends Document {
  name: string;
  email: string;
  link: string;
  createdAt: Date;
  subAccountId: Types.ObjectId;
}

export interface IFunnel extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
  published: boolean;
  subDomainName?: string;
  favicon?: string;
  subAccountId: Types.ObjectId;
  funnelPages: Types.ObjectId[];
  liveProducts?: string;
  className: Types.ObjectId[];
}

export interface IFunnelPage extends Document {
  name: string;
  pathName: string;
  createdAt: Date;
  updatedAt: Date;
  visits: number;
  content?: string;
  order: number;
  previewImage?: string;
  funnelId: Types.ObjectId;
  
}

export interface IClassName extends Document {
  name: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  customData?: string;
  funnelId: Types.ObjectId;
}

export interface IAgencySidebarOption extends Document {
  name: string;
  link: string;
  icon: Icon;
  agencyId: Types.ObjectId;
}

export interface ISubAccountSidebarOption extends Document {
  name: string;
  link: string;
  icon: Icon;
  subAccountId: Types.ObjectId;
}

export interface IInvitation extends Document {
  email: string;
  agencyId: Types.ObjectId;
  status: InvitationStatus;
  role: Role;
}

export interface INotification extends Document {
  notification: string;
  agencyId: Types.ObjectId;
  subAccountId?: Types.ObjectId;
  userId: Types.ObjectId;
}

export const CreateFunnelFormSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  subDomainName: z.string().optional(),
  favicon: z.string().optional(),
});

export const FunnelPageSchema = z.object({
  name: z.string().min(1),
  pathName: z.string().optional(),
});

export type EditorBtns = "text" | "container" | "section" | "contactForm" | "paymentForm" | "link" | "2Col" | "video" | "__body" | "image" | null | "3Col";

export const defaultStyles: React.CSSProperties = {
  backgroundPosition: "center",
  objectFit: "cover",
  backgroundRepeat: "no-repeat",
  textAlign: "left",
  opacity: "100%",
};