export class BaseDTO {
  public id: number;
  public createdAt: Date;
  public lastModified: Date;
  public archivedAt: Date;
  public isArchived: boolean;

  constructor(data?: any) {
    this.id = data?.id;
    this.createdAt = data?.createdAt;
    this.lastModified = data?.lastModified;
    this.archivedAt = data?.archivedAt;
    this.isArchived = data?.isArchived;
  }
}
