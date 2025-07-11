export class PaginationRequestDto {
  constructor(
    public readonly limit: number,
    public readonly offset: number,
    public readonly sort?: string,
  ) {}

  static fromQuery(query: any): PaginationRequestDto {
    const limit = query.limit ? parseInt(query.limit as string) : 10;
    const offset = query.page ? (parseInt(query.page as string) - 1) * limit : 0;
    const sort = query.sort as string | undefined;

    return new PaginationRequestDto(limit, offset, sort);
  }
} 