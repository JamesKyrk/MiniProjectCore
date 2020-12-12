using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiniProjectCore.Data;
using MiniProjectCore.Model;

namespace MiniProjectCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SourceIdsController : ControllerBase
    {
        private readonly MiniDbContext _context;

        public SourceIdsController(MiniDbContext context)
        {
            _context = context;
        }

        // GET: api/SourceIds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SourceId>>> GetSourceIds()
        {
            return await _context.SourceIds.ToListAsync();
        }

        // GET: api/SourceIds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SourceId>> GetSourceId(int id)
        {
            var sourceId = await _context.SourceIds.FindAsync(id);

            if (sourceId == null)
            {
                return NotFound();
            }

            return sourceId;
        }

        // PUT: api/SourceIds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSourceId(int id, SourceId sourceId)
        {
            if (id != sourceId.Id)
            {
                return BadRequest();
            }

            _context.Entry(sourceId).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SourceIdExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SourceIds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SourceId>> PostSourceId(SourceId sourceId)
        {
            _context.SourceIds.Add(sourceId);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSourceId", new { id = sourceId.Id }, sourceId);
        }

        // DELETE: api/SourceIds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSourceId(int id)
        {
            var sourceId = await _context.SourceIds.FindAsync(id);
            if (sourceId == null)
            {
                return NotFound();
            }

            _context.SourceIds.Remove(sourceId);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SourceIdExists(int id)
        {
            return _context.SourceIds.Any(e => e.Id == id);
        }
    }
}
