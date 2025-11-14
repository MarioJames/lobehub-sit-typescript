// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as KnowledgeBasesAPI from './knowledge-bases';
import * as FilesAPI from './files';
import { FileListParams, Files } from './files';
import * as UsersAPI from '../users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class KnowledgeBases extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a new knowledge base with specified properties.
   *
   * - Requires KNOWLEDGE_BASE_CREATE permission
   * - Returns the created knowledge base with complete metadata
   */
  create(body: KnowledgeBaseCreateParams, options?: RequestOptions): APIPromise<APIResponseKnowledgeBase> {
    return this._client.post('/knowledge-bases', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific knowledge base.
   *
   * - Requires KNOWLEDGE_BASE_READ permission
   * - Checks access permissions and enabled status
   * - Returns complete knowledge base metadata
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIResponseKnowledgeBase> {
    return this._client.get(path`/knowledge-bases/${id}`, options);
  }

  /**
   * Update knowledge base properties.
   *
   * - Requires KNOWLEDGE_BASE_UPDATE permission
   * - Only the owner can update the knowledge base
   * - All fields are optional
   */
  update(
    id: string,
    body: KnowledgeBaseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIResponseKnowledgeBase> {
    return this._client.patch(path`/knowledge-bases/${id}`, { body, ...options });
  }

  /**
   * Get paginated list of knowledge bases with optional filtering and search.
   *
   * - Requires KNOWLEDGE_BASE_READ permission
   * - Returns knowledge bases accessible by the current user
   * - Supports filtering by type (personal/shared) and enabled status
   */
  list(
    query: KnowledgeBaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIResponseKnowledgeBaseList> {
    return this._client.get('/knowledge-bases', { query, ...options });
  }

  /**
   * Permanently delete a knowledge base.
   *
   * - Requires KNOWLEDGE_BASE_DELETE permission
   * - Only the owner can delete the knowledge base
   * - Cascades delete to related files and grants
   * - Cannot be undone
   */
  delete(id: string, options?: RequestOptions): APIPromise<APIResponseKnowledgeBaseDelete> {
    return this._client.delete(path`/knowledge-bases/${id}`, options);
  }
}

export interface APIResponseFileList extends UsersAPI.APIResponseBase {
  data?: APIResponseFileList.Data;
}

export namespace APIResponseFileList {
  export interface Data {
    files: Array<FilesAPI.File>;

    total: number;
  }
}

export interface APIResponseKnowledgeBase extends UsersAPI.APIResponseBase {
  data?: APIResponseKnowledgeBase.Data;
}

export namespace APIResponseKnowledgeBase {
  export interface Data {
    knowledgeBase: KnowledgeBasesAPI.KnowledgeBase;
  }
}

export interface APIResponseKnowledgeBaseDelete extends UsersAPI.APIResponseBase {
  data?: APIResponseKnowledgeBaseDelete.Data;
}

export namespace APIResponseKnowledgeBaseDelete {
  export interface Data {
    success: boolean;

    message?: string | null;
  }
}

export interface APIResponseKnowledgeBaseList extends UsersAPI.APIResponseBase {
  data?: APIResponseKnowledgeBaseList.Data;
}

export namespace APIResponseKnowledgeBaseList {
  export interface Data {
    knowledgeBases: Array<KnowledgeBasesAPI.KnowledgeBase>;

    total: number;
  }
}

export interface CreateKnowledgeBaseRequest {
  name: string;

  avatar?: string | null;

  description?: string | null;

  isPublic?: boolean | null;

  settings?: { [key: string]: unknown } | null;

  type?: 'personal' | 'shared' | null;
}

export interface File {
  id?: string;

  createdAt?: string | null;

  fileHash?: string | null;

  fileType?: string | null;

  knowledgeBaseId?: string | null;

  metadata?: { [key: string]: unknown } | null;

  name?: string | null;

  size?: number | null;

  updatedAt?: string | null;

  url?: string | null;

  userId?: string | null;
}

export interface KnowledgeBase {
  id: string;

  createdAt: string;

  enabled: boolean;

  name: string;

  updatedAt: string;

  avatar?: string | null;

  description?: string | null;

  isPublic?: boolean | null;

  settings?: { [key: string]: unknown } | null;

  type?: 'personal' | 'shared' | null;

  userId?: string | null;
}

export interface UpdateKnowledgeBaseRequest {
  avatar?: string | null;

  description?: string | null;

  enabled?: boolean | null;

  isPublic?: boolean | null;

  name?: string | null;

  settings?: { [key: string]: unknown } | null;

  type?: 'personal' | 'shared' | null;
}

export interface KnowledgeBaseCreateParams {
  /**
   * Knowledge base name (required)
   */
  name: string;

  /**
   * Knowledge base avatar URL
   */
  avatar?: string | null;

  /**
   * Knowledge base description
   */
  description?: string | null;

  /**
   * Whether the knowledge base is public (default false)
   */
  isPublic?: boolean | null;

  /**
   * Knowledge base settings
   */
  settings?: { [key: string]: unknown } | null;

  /**
   * Knowledge base type (default personal)
   */
  type?: 'personal' | 'shared' | null;
}

export interface KnowledgeBaseUpdateParams {
  /**
   * Knowledge base avatar URL
   */
  avatar?: string | null;

  /**
   * Knowledge base description
   */
  description?: string | null;

  /**
   * Whether the knowledge base is enabled
   */
  enabled?: boolean | null;

  /**
   * Whether the knowledge base is public
   */
  isPublic?: boolean | null;

  /**
   * Knowledge base name
   */
  name?: string | null;

  /**
   * Knowledge base settings
   */
  settings?: { [key: string]: unknown } | null;

  /**
   * Knowledge base type
   */
  type?: 'personal' | 'shared' | null;
}

export interface KnowledgeBaseListParams {
  /**
   * Filter by enabled status
   */
  enabled?: boolean;

  /**
   * Search keyword for name or description (case-insensitive)
   */
  keyword?: string;

  /**
   * Page number (default 1)
   */
  page?: number;

  /**
   * Items per page (default 20, max 100)
   */
  pageSize?: number;

  /**
   * Filter by knowledge base type
   */
  type?: 'personal' | 'shared';
}

KnowledgeBases.Files = Files;

export declare namespace KnowledgeBases {
  export {
    type APIResponseFileList as APIResponseFileList,
    type APIResponseKnowledgeBase as APIResponseKnowledgeBase,
    type APIResponseKnowledgeBaseDelete as APIResponseKnowledgeBaseDelete,
    type APIResponseKnowledgeBaseList as APIResponseKnowledgeBaseList,
    type CreateKnowledgeBaseRequest as CreateKnowledgeBaseRequest,
    type File as File,
    type KnowledgeBase as KnowledgeBase,
    type UpdateKnowledgeBaseRequest as UpdateKnowledgeBaseRequest,
    type KnowledgeBaseCreateParams as KnowledgeBaseCreateParams,
    type KnowledgeBaseUpdateParams as KnowledgeBaseUpdateParams,
    type KnowledgeBaseListParams as KnowledgeBaseListParams,
  };

  export { Files as Files, type FileListParams as FileListParams };
}
