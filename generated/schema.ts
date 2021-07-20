// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenSeries(): string {
    let value = this.get("tokenSeries");
    return value.toString();
  }

  set tokenSeries(value: string) {
    this.set("tokenSeries", Value.fromString(value));
  }

  get tokenName(): string {
    let value = this.get("tokenName");
    return value.toString();
  }

  set tokenName(value: string) {
    this.set("tokenName", Value.fromString(value));
  }

  get mintTime(): BigInt {
    let value = this.get("mintTime");
    return value.toBigInt();
  }

  set mintTime(value: BigInt) {
    this.set("mintTime", Value.fromBigInt(value));
  }

  get buildTime(): BigInt | null {
    let value = this.get("buildTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set buildTime(value: BigInt | null) {
    if (value === null) {
      this.unset("buildTime");
    } else {
      this.set("buildTime", Value.fromBigInt(value as BigInt));
    }
  }

  get creator(): string {
    let value = this.get("creator");
    return value.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get builder(): string | null {
    let value = this.get("builder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set builder(value: string | null) {
    if (value === null) {
      this.unset("builder");
    } else {
      this.set("builder", Value.fromString(value as string));
    }
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get pixels(): string {
    let value = this.get("pixels");
    return value.toString();
  }

  set pixels(value: string) {
    this.set("pixels", Value.fromString(value));
  }

  get isSource(): boolean {
    let value = this.get("isSource");
    return value.toBoolean();
  }

  set isSource(value: boolean) {
    this.set("isSource", Value.fromBoolean(value));
  }

  get isBuilt(): boolean {
    let value = this.get("isBuilt");
    return value.toBoolean();
  }

  set isBuilt(value: boolean) {
    this.set("isBuilt", Value.fromBoolean(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get created(): Array<string> {
    let value = this.get("created");
    return value.toStringArray();
  }

  set created(value: Array<string>) {
    this.set("created", Value.fromStringArray(value));
  }

  get built(): Array<string> {
    let value = this.get("built");
    return value.toStringArray();
  }

  set built(value: Array<string>) {
    this.set("built", Value.fromStringArray(value));
  }
}

export class Event extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Event entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Event entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Event", id.toString(), this);
  }

  static load(id: string): Event | null {
    return store.get("Event", id) as Event | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get eventType(): string {
    let value = this.get("eventType");
    return value.toString();
  }

  set eventType(value: string) {
    this.set("eventType", Value.fromString(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }
}
