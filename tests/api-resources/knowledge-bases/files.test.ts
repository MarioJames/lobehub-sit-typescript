// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LobehubSit from 'lobehub-sit';

const client = new LobehubSit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.knowledgeBases.files.list('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.knowledgeBases.files.list(
        'id',
        {
          fileType: 'fileType',
          keyword: 'keyword',
          page: 1,
          pageSize: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LobehubSit.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('batchAdd: only required params', async () => {
    const responsePromise = client.knowledgeBases.files.batchAdd('id', { fileIds: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchAdd: required and optional params', async () => {
    const response = await client.knowledgeBases.files.batchAdd('id', { fileIds: ['string'] });
  });

  // Prism tests are disabled
  test.skip('batchRemove: only required params', async () => {
    const responsePromise = client.knowledgeBases.files.batchRemove('id', { fileIds: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchRemove: required and optional params', async () => {
    const response = await client.knowledgeBases.files.batchRemove('id', { fileIds: ['string'] });
  });

  // Prism tests are disabled
  test.skip('move: only required params', async () => {
    const responsePromise = client.knowledgeBases.files.move('id', {
      fileIds: ['string'],
      targetKnowledgeBaseId: 'targetKnowledgeBaseId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('move: required and optional params', async () => {
    const response = await client.knowledgeBases.files.move('id', {
      fileIds: ['string'],
      targetKnowledgeBaseId: 'targetKnowledgeBaseId',
    });
  });
});
