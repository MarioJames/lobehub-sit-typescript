// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from '../files';
import * as UsersAPI from '../users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Get a paginated list of files that belong to a specific knowledge base.
   *
   * - Requires KNOWLEDGE_BASE_READ permission
   * - Returns the same file structure as the global file list
   * - Supports pagination and basic filtering by file type and search keyword
   */
  list(
    id: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.APIResponseFileList> {
    return this._client.get(path`/knowledge-bases/${id}/files`, { query, ...options });
  }
}

export interface KBAPIResponseFileList extends UsersAPI.APIResponseBase {
  data?: KBAPIResponseFileList.Data;
}

export namespace KBAPIResponseFileList {
  export interface Data {
    files: Array<FilesAPI.File>;

    total: number;
  }
}

export interface KBFile {
  id?: string;

  chunkCount?: number | null;

  chunkingError?: KBFile.ChunkingError | null;

  chunkingStatus?: 'pending' | 'processing' | 'success' | 'error' | null;

  createdAt?: string | null;

  embeddingError?: KBFile.EmbeddingError | null;

  embeddingStatus?: 'pending' | 'processing' | 'success' | 'error' | null;

  fileHash?: string | null;

  fileType?: string | null;

  finishEmbedding?: boolean | null;

  knowledgeBaseId?: string | null;

  metadata?: { [key: string]: unknown } | null;

  name?: string | null;

  size?: number | null;

  updatedAt?: string | null;

  url?: string | null;

  userId?: string | null;
}

export namespace KBFile {
  export interface ChunkingError {
    body: ChunkingError.Body;

    name: string;
  }

  export namespace ChunkingError {
    export interface Body {
      detail: string;
    }
  }

  export interface EmbeddingError {
    body: EmbeddingError.Body;

    name: string;
  }

  export namespace EmbeddingError {
    export interface Body {
      detail: string;
    }
  }
}

export interface FileListParams {
  /**
   * Filter by file type (e.g., "image/", "application/pdf")
   */
  fileType?: string;

  /**
   * Search keyword for file name (case-insensitive)
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
}

export declare namespace Files {
  export {
    type KBAPIResponseFileList as KBAPIResponseFileList,
    type KBFile as KBFile,
    type FileListParams as FileListParams,
  };
}
