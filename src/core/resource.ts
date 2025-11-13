// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { LobehubSit } from '../client';

export abstract class APIResource {
  protected _client: LobehubSit;

  constructor(client: LobehubSit) {
    this._client = client;
  }
}
