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

    /**
     * Total size in bytes of all matched files
     */
    totalSize?: string;
  }
}

export interface KBFile {
  id?: string;

  chunking?: KBFile.Chunking | null;

  createdAt?: string | null;

  embedding?: KBFile.Embedding | null;

  fileHash?: string | null;

  fileType?: string | null;

  knowledgeBaseId?: string | null;

  knowledgeBases?: Array<KBFile.KnowledgeBase> | null;

  metadata?: { [key: string]: unknown } | null;

  name?: string | null;

  size?: number | null;

  updatedAt?: string | null;

  url?: string | null;

  userId?: string | null;
}

export namespace KBFile {
  export interface Chunking {
    id?: string | null;

    /**
     * Chunk count for the related file (only for chunking tasks)
     */
    count?: number | null;

    error?: Chunking.Error | null;

    status?: 'pending' | 'processing' | 'success' | 'error' | null;

    type?: 'chunk' | 'embedding' | 'image_generation' | null;
  }

  export namespace Chunking {
    export interface Error {
      body: Error.Body;

      name: string;
    }

    export namespace Error {
      export interface Body {
        detail: string;
      }
    }
  }

  export interface Embedding {
    id?: string | null;

    /**
     * Chunk count for the related file (only for chunking tasks)
     */
    count?: number | null;

    error?: Embedding.Error | null;

    status?: 'pending' | 'processing' | 'success' | 'error' | null;

    type?: 'chunk' | 'embedding' | 'image_generation' | null;
  }

  export namespace Embedding {
    export interface Error {
      body: Error.Body;

      name: string;
    }

    export namespace Error {
      export interface Body {
        detail: string;
      }
    }
  }

  export interface KnowledgeBase {
    id: string;

    name: string;

    avatar?: string | null;

    description?: string | null;
  }
}

export interface FileListParams {
  /**
   * Filter by file type (e.g., 'image/', 'application/pdf')
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
