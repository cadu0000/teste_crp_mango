export class PaginatedResponse<T> {
  constructor(
    public readonly limit: number,
    public readonly next: string | null,
    public readonly offset: number,
    public readonly previous: string | null,
    public readonly total: number,
    public readonly data: T[],
  ) {}

  static create<T>(props: {
    limit: number;
    offset: number;
    total: number;
    data: T[];
    baseUrl?: string;
  }): PaginatedResponse<T> {
    const { limit, offset, total, data, baseUrl = '' } = props;
    
    const next = offset + limit < total ? `${baseUrl}?limit=${limit}&offset=${offset + limit}` : null;
    const previous = offset > 0 ? `${baseUrl}?limit=${limit}&offset=${Math.max(0, offset - limit)}` : null;

    return new PaginatedResponse<T>(
      limit,
      next,
      offset,
      previous,
      total,
      data,
    );
  }
} 