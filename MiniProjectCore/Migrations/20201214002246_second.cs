using Microsoft.EntityFrameworkCore.Migrations;

namespace MiniProjectCore.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Source_Id",
                table: "Sources",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Source_Id",
                table: "Sources");
        }
    }
}
