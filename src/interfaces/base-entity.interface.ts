/**
 * All database entities should inherit from this base class to have these common properties.
 */
export interface IBaseEntity {
  id: number;
  createdAt: Date;
  lastModified: Date;
  archivedAt: Date;
  isArchived: boolean;
}
