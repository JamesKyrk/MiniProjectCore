using Microsoft.EntityFrameworkCore.Migrations;

namespace MiniProjectCore.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SourceIds",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Source_Name = table.Column<string>(type: "TEXT", nullable: true),
                    Source_Code = table.Column<string>(type: "TEXT", nullable: true),
                    Source_Id = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SourceIds", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Sources",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Source_Code = table.Column<string>(type: "TEXT", nullable: true),
                    Source_Name = table.Column<string>(type: "TEXT", nullable: true),
                    Agent_Group = table.Column<string>(type: "TEXT", nullable: true),
                    Source_Group = table.Column<string>(type: "TEXT", nullable: true),
                    HBE = table.Column<string>(type: "TEXT", nullable: true),
                    Commission = table.Column<double>(type: "REAL", nullable: false),
                    Log_Source = table.Column<string>(type: "TEXT", nullable: true),
                    Country_Id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sources", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SourceIds");

            migrationBuilder.DropTable(
                name: "Sources");
        }
    }
}
