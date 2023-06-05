class Database {
  static database: Database;
  private constructor(
    private user: string,
    private host: string,
    private password: string,
  ) {}

  connect(): void {
    console.log('Connectando ao banco de dados');
  }

  static getDatabase(user: string, host: string, password: string): Database {
    if (Database.database) return Database.database;

    Database.database = new Database(user, host, password);

    return Database.database;
  }
}
