﻿

namespace ParkingContext.Models
{
    public class AdicionaTicket
    {
        public int TicketId { get; set; }
        public string Cpf { get; set; }
        public string Placa { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public bool Mensalista { get; set; }

    }
}
